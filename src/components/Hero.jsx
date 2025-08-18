import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-full">
      {/* Background Image */}
      <img
        src="./hero.png"
        alt="Hero"
        className="w-full h-full object-cover"
      />
      {/* Button */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2">
        <button className="bg-[#46171A] text-white font-semibold text-sm md:text-base py-2 md:py-3 px-6 md:px-8 rounded-full shadow-lg hover:bg-[#d44d1f] transition-colors">
          MAKE A RESERVATION
        </button>
      </div>
    </section>
  );
};

export default Hero;
