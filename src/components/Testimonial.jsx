import React, { useEffect, useRef } from "react";
const Testimonial = () => {
  const carouselRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const track = trackRef.current;
    
    if (!carousel || !track) return;

    const testimonials = carousel.children;

    // Clone the first set of testimonials for seamless loop
    const cloneTestimonials = () => {
      const cloneCount = Math.ceil(window.innerWidth / 400) || 1;
      for (let i = 0; i < cloneCount; i++) {
        const clone = testimonials[i].cloneNode(true);
        carousel.appendChild(clone);
      }
    };

    cloneTestimonials();

    // Animation setup
    let animationFrame;
    let startTime;
    const duration = 50000;
    const itemWidth = () => (window.innerWidth < 768 ? 324 : 504); // width + gap
    const totalWidth = itemWidth() * testimonials.length;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % duration) / duration;
      const translateX = -progress * totalWidth;
      carousel.style.transform = `translateX(${translateX}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    // Pause on hover/focus
    const pauseAnimation = () => cancelAnimationFrame(animationFrame);
    const resumeAnimation = () => {
      startTime = performance.now() - ((performance.now() - startTime) % duration);
      animationFrame = requestAnimationFrame(animate);
    };

    track.addEventListener("mouseenter", pauseAnimation);
    track.addEventListener("mouseleave", resumeAnimation);
    track.addEventListener("focusin", pauseAnimation);
    track.addEventListener("focusout", resumeAnimation);

    const handleResize = () => {
      cancelAnimationFrame(animationFrame);
      while (carousel.children.length > testimonials.length) {
        carousel.removeChild(carousel.lastChild);
      }
      cloneTestimonials();
      startTime = performance.now();
      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      track.removeEventListener("mouseenter", pauseAnimation);
      track.removeEventListener("mouseleave", resumeAnimation);
      track.removeEventListener("focusin", pauseAnimation);
      track.removeEventListener("focusout", resumeAnimation);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <h2 className="text-5xl text-[#46171A] font-wa-flat font-medium text-center mb-8 relative z-10">
        Client Testimonials
      </h2>
      <div
        ref={trackRef}
        className="max-w-[90%] mx-auto relative px-4 overflow-hidden"
      >
        <div ref={carouselRef} className="flex gap-6 w-max">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ rating, text, name, title }) => (
  <div className="w-[300px] md:w-[480px] flex-shrink-0 bg-[#d6bfa4] text-black rounded-2xl p-6 md:p-8 shadow-lg border border-[rgba(226,205,179,0.15)] transition-all duration-300
                  hover">
    <div className="flex justify-start gap-1 mb-5 text-xl">
      {"★".repeat(rating)}
    </div>
    <p className="text-sm md:text-base italic leading-relaxed mb-6 relative">{text}</p>
    <div className="pt-5 border-t border-[rgba(226,205,179,0.2)]">
      <h3 className="text-base md:text-lg font-semibold mb-2">{name}</h3>
      <p className="text-xs md:text-sm">{title}</p>
    </div>
  </div>
);

const testimonialsData = [
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
