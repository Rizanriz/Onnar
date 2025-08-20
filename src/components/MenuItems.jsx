import React from 'react';
import food1 from '/food1.png';
import food2 from '/food1.png';
import food3 from '/food1.png';
import food4 from '/food1.png';
import food5 from '/food1.png';
import food6 from '/food1.png';
import food7 from '/food1.png';
import food8 from '/food1.png';
import food9 from '/food1.png';

const MenuItems = () => {
  const menuItems = [
    { title: 'On Nar', subtitle: 'RESTAURANT', buttonText: 'EXPLORE', img: food1 },
    { title: 'On Nar', subtitle: 'RESTAURANT', buttonText: 'EXPLORE', img: food2 },
    { title: 'On Nar', subtitle: 'RESTAURANT', buttonText: 'EXPLORE', img: food3 },
    { title: 'On Nar', subtitle: 'RESTAURANT', buttonText: 'EXPLORE', img: food4 },
    { title: 'On Nar', subtitle: 'RESTAURANT', buttonText: 'EXPLORE', img: food5 },
    { title: 'On Nar', subtitle: 'RESTAURANT', buttonText: 'EXPLORE', img: food6 },
    { title: 'On Nar', subtitle: 'RESTAURANT', buttonText: 'EXPLORE', img: food7 },
    { title: 'On Nar', subtitle: 'RESTAURANT', buttonText: 'EXPLORE', img: food8 },
    { title: 'On Nar', subtitle: 'RESTAURANT', buttonText: 'EXPLORE', img: food9 },
  ];

  return (
    <div className="bg-orange-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-5xl font-wa-flat font-medium  tracking-wide text-center text-[#46171A] mb-16 font-wa-flat">
          Our Delicious Menu
        </h2>
        
        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-30 mb-40">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              {/* Card Container */}
              <div className="bg-gradient-to-b from-[#AD4349] to-[#F07042] rounded-3xl pt-10 pb-40 text-center relative overflow-visible shadow-lg">
                {/* Content */}
                <div className="mb-8">
                  <h3 className="font-wa-flat text-white tracking-wider text-4xl lg:text-5xl font-light">{item.title}</h3>
                  <p className="text-white inter text-sm font-medium mb-6 opacity-90">{item.subtitle}</p>
                  
                  {/* Button */}
                  <button 
                    className={`px-8 py-2 text-sm font-bold rounded-lg transition-colors cursor-pointer duration-300 bg-white text-red-700 hover:bg-[#F15A24] active:bg-[#F15A24] hover:text-white active:text-white focus:bg-[#F15A24] focus:text-white`}
                  >
                    {item.buttonText}
                  </button>
                </div>
                
                {/* Food Image */}
                {item.img && (
                  <img 
                    src={item.img} 
                    alt={item.title || `Food ${index + 1}`} 
                    className="absolute -bottom-25 left-1/2 transform -translate-x-1/2 w-70 h-62 object-fill rounded-full shadow-xl z-10"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-[#46171A] cursor-pointer text-white font-wa-flat text-xl tracking-widest px-8 py-3 rounded-xl font-light hover:bg-[#D44D1F] active:bg-[#D44D1F] focus:bg-[#D44D1F] transition-colors duration-300">
            MAKE A RESERVATION
          </button>
          <button className="bg-[#D6BFA4] cursor-pointer font-wa-flat text-[#46171A] text-xl tracking-widest px-8 py-3 rounded-xl font-semibold hover:bg-[#F15A24] active:bg-[#F15A24] focus:bg-[#F15A24] transition-colors duration-300">
            DOWNLOAD THE MENU CARD
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
