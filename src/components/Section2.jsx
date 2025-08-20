import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full bg-[#ECE7DA]">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        
        {/* Left Content */}
        <div className="font-wa-flat text-center md:text-left mt-6 md:mt-0 md:pl-24">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#46171A] leading-10 lg:leading-16 tracking-wide">
            Savor the Sunrise <br />
            with{" "}
            <span className="text-[#F15A24]">Authentic Arabic</span> <br />
            & Turkish Delights
          </h2>
          
          <button className="mt-6 mb-10 bg-[#D7BFA7] text-2xl cursor-pointer text-[#46171A] tracking-wider font-light px-6 py-3 rounded-md hover:bg-[#F15A24] focus:bg-[#F15A24] active:bg-[#F15A24] hover:text-white transition">
            EXPLORE OUR MENU
          </button>
        </div>

        {/* Right Image */}
        <div className="relative w-full md:w-1/2 flex justify-end items-start">
          <img
            src="./food.png" // replace with your image
            alt="Arabic Breakfast"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
          />
        </div>
      </div>


       <div className="w-full bg-[#ECE7DA] flex justify-center px-4 md:px-20 py-12">
      <div className="max-w-4xl text-center">
        <h2 className="text-5xl text-[#46171A] font-wa-flat font-medium  mb-4">
          Welcome to <span className="text-[#F15A24]">On Nar</span>
        </h2>
        <p className="inter text-[#46171A] font-medium text-sm md:text-base leading-relaxed">
          On Nar is a distinctive Arabic restaurant bringing authentic Middle Eastern flavors to the heart of Bali.
          Operated by a seasoned Arabic chef, it offers a rich culinary experience that evokes the warmth and
          hospitality of traditional Arab culture. From fire-grilled shawarma to fragrant rice dishes and mezze
          platters, every item is crafted with original spices, slow-cooked techniques, and a deep respect for
          heritage. Set in a stylish, welcoming space, On Nar is where locals, tourists, and food lovers come
          together to enjoy soulful cuisine—anytime, day or night. Open 24/7, it's not just a place to eat—it’s
          where flavor, fire, and fellowship meet.
        </p>
      </div>
    </div>
    </section>
    
  );
};

export default HeroSection;
