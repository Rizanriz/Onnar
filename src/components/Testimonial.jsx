import React, { useEffect, useRef } from "react";

const Testimonial = () => {
  const carouselRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const track = trackRef.current;
    
    if (!carousel || !track) return;

    // Clone the first set of testimonials and append to end for seamless looping
    const cloneTestimonials = () => {
      const testimonials = carousel.children;
      const cloneCount = Math.ceil(window.innerWidth / 480) || 1;
      
      for (let i = 0; i < cloneCount; i++) {
        const clone = testimonials[i].cloneNode(true);
        carousel.appendChild(clone);
      }
    };

    cloneTestimonials();

    // Animation setup
    let animationFrame;
    let startTime;
    const duration = 20000; // 20 seconds for full loop
    const itemWidth = 480 + 24; // width + gap
    const totalWidth = itemWidth * testimonials.length;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % duration) / duration;
      
      // Calculate the translateX value
      const translateX = -progress * totalWidth;
      carousel.style.transform = `translateX(${translateX}px)`;
      
      // Reset position when animation completes
      if (progress >= 0.999) {
        startTime = timestamp;
      }
      
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    // Pause on hover
    const pauseAnimation = () => {
      cancelAnimationFrame(animationFrame);
    };

    const resumeAnimation = () => {
      startTime = performance.now() - ((performance.now() - startTime) % duration);
      animationFrame = requestAnimationFrame(animate);
    };

    track.addEventListener('mouseenter', pauseAnimation);
    track.addEventListener('mouseleave', resumeAnimation);

    return () => {
      cancelAnimationFrame(animationFrame);
      track.removeEventListener('mouseenter', pauseAnimation);
      track.removeEventListener('mouseleave', resumeAnimation);
    };
  }, []);

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <h2 className="text-4xl text-[#46171A] font-medium text-center mb-8 relative z-10">
        Testimonials
      </h2>
      <div 
        ref={trackRef}
        className="max-w-6xl mx-auto relative px-4 overflow-hidden"
      >
        <div 
          ref={carouselRef}
          className="flex gap-6 w-max"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ rating, text, name, title }) => (
  <div className="w-[480px] mt-5 mb-5 flex-shrink-0 bg-[#d6bfa4] text-black hover:text-white  rounded-2xl p-8 shadow-lg border border-[rgba(226,205,179,0.15)] transition-all duration-400 hover:scale-103 hover:shadow-xl hover:bg-[#46171A] cursor-pointer">
    <div className="flex justify-center gap-1 mb-5 text-xl text-[#fcde34]">
      {"★".repeat(5)}
    </div>
    <p className="text-base italic leading-relaxed mb-6 relative">
      {text}
    </p>
    <div className="pt-5 border-t border-[rgba(226,205,179,0.2)]">
      <h3 className=" text-lg font-semibold mb-2">{name}</h3>
      <p className="text-sm">{title}</p>
    </div>
  </div>
);

const testimonials = [
  {
    rating: 5,
    text: "Ulu Amir Group transformed our hospitality experience in Bali. Their team's expertise in blending Arabic and Balinese culture created something truly unique.",
    name: "Ahmed Khalifa",
    title: "CEO, TechSolutions UAE",
  },
  {
    rating: 5,
    text: "The strategic approach to our restaurant launch helped us establish quickly in the competitive Uluwatu market. Highly recommend their services.",
    name: "Sarah Al-Mansoori",
    title: "CFO, Gulf Enterprises",
  },
  {
    rating: 5,
    text: "We've been working with Ulu Amir for 2 years now. Flawless execution every time with clear communication throughout the process.",
    name: "Raj Patel",
    title: "Director, TradeLinks FZE",
  },
  {
    rating: 5,
    text: "Their understanding of luxury real estate in Bali helped us avoid potential investment pitfalls. Exceptional market knowledge.",
    name: "Fatima Al-Qassimi",
    title: "Founder, Pearl Consulting",
  },
  {
    rating: 5,
    text: "Outstanding service quality and attention to detail. Their team made complex business matters simple and understandable.",
    name: "Mohammad Al-Rashid",
    title: "Managing Partner, Emirates Trade Hub",
  },
];

export default Testimonial;