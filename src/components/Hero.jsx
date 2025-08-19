import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-full">
      {/* Desktop Image */}
      <img
        src="./hero.png"
        alt="Hero Desktop"
        className="hidden md:block w-full h-full object-cover"
      />

      {/* Mobile Image */}
      <img
        src="./MobileHero.png"
        alt="Hero Mobile"
        className="block md:hidden w-full h-full object-cover"
      />
      {/* Button */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2">
        <button className="bg-[#46171A] w-60 md:w-100 cursor-pointer font-wa-flat tracking-widest text-white font-light text-xl lg:text-2xl py-2 md:py-3 px-6 md:px-16 rounded-xl shadow-lg hover:bg-[#d44d1f] focus:bg-[#d44d1f] active:bg-[#d44d1f] transition-colors">
          MAKE A RESERVATION
        </button>
      </div>
    </section>
  );
};

export default Hero;


  