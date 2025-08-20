import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVenturesOpen, setIsVenturesOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[1000] h-12 md:h-18 mx-auto w-[95%] 
      mt-2 md:mt-5 bg-[#46171A] py-1 md:py-[15px] px-3 md:px-[30px] 
      rounded-[20px] md:rounded-[50px] shadow-md flex items-center"
    >
      {/* Company Logo (only visible on mobile, replaces old toggle position) */}
      <div className="absolute left-3 flex items-center md:hidden">
        <a href="https://ulu-amir-website.vercel.app"><img 
          src="./logo.png"
          alt="Company Logo"
          className="w-[80px] h-[60px] object-contain"/></a>
      </div>

      {/* Center Spinning Logo (same for all screens) */}
      <div
        className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] bg-[#46171A] 
        cursor-pointer rounded-full flex items-center justify-center 
        border-[2px] md:border-[3px] border-[#46171A] shadow-md overflow-hidden 
        mx-auto md:mx-0 md:absolute md:left-0 spin"
      >
        <img
          src="./Group.png"
          alt="logo"
          className="w-[40%] md:w-[40%] h-[80%]"
        />
      </div>

      {/* Mobile menu button (moved to right side) */}
      <button
        className="md:hidden text-white p-2 absolute right-3 top-1/2 -translate-y-1/2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Links */}
      <div
        className={`${isMenuOpen ? "flex" : "hidden"} 
          md:flex flex-col md:flex-row 
          absolute md:static top-full left-0 md:left-auto 
          w-full md:w-auto 
          bg-[#46171A] md:bg-transparent 
          rounded-b-[15px] md:rounded-none 
          mt-2 md:mt-0 py-3 md:py-0 
          px-6 md:px-0 
          gap-2 md:gap-5 
          md:ml-auto`}
      >
        <a
          href="#"
          className="text-white font-medium text-sm md:text-[16px] py-2 px-3 md:py-[10px] md:px-[15px] rounded-[4px] hover:bg-[#F15A24] transition-colors w-full md:w-auto"
        >
          Home
        </a>

        {/* Dropdown */}
        <div
          className="relative w-full md:w-auto"
          onMouseEnter={() =>
            window.innerWidth >= 768 && setIsVenturesOpen(true)
          }
          onMouseLeave={() =>
            window.innerWidth >= 768 && setIsVenturesOpen(false)
          }
        >
          <button
            className="flex justify-between items-center text-white font-medium text-sm md:text-[16px] py-2 px-3 md:py-[10px] md:px-[15px] rounded-[4px] hover:bg-[#F15A24] transition-colors w-full md:w-auto"
            onClick={() =>
              window.innerWidth < 768 && setIsVenturesOpen(!isVenturesOpen)
            }
          >
            Our Ventures
            <svg
              className={`ml-2 w-3 h-3 md:w-4 md:h-4 transition-transform ${
                isVenturesOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          <div
            className={`${
              isVenturesOpen ? "flex" : "hidden"
            } flex-col md:absolute md:top-full md:left-0 bg-[#46171A] min-w-[160px] md:min-w-[180px] shadow-md z-[2000] rounded-[6px] mt-2 md:mt-0`}
          >
            <a
              href="https://ulu-amir-website.vercel.app"
              className="text-white block py-2 px-4 hover:bg-[#F15A24] transition-colors text-sm md:text-base"
            >
              Ulu Amir
            </a>
            <a
              href="#"
              className="text-white block py-2 px-4 hover:bg-[#F15A24] transition-colors text-sm md:text-base"
            >
              Venture 2
            </a>
            <a
              href="#"
              className="text-white block py-2 px-4 hover:bg-[#F15A24] transition-colors text-sm md:text-base"
            >
              Venture 3
            </a>
          </div>
        </div>

        <a
          href="#"
          className="text-white font-medium text-sm md:text-[16px] py-2 px-3 md:py-[10px] md:px-[15px] rounded-[4px] hover:bg-[#F15A24] transition-colors w-full md:w-auto"
        >
          Founders Message
        </a>
        <a
          href="#"
          className="text-white font-medium text-sm md:text-[16px] py-2 px-3 md:py-[10px] md:px-[15px] rounded-[4px] hover:bg-[#F15A24] transition-colors w-full md:w-auto"
        >
          About Us
        </a>
        <a
          href="#"
          className="text-white font-medium text-sm md:text-[16px] py-2 px-3 md:py-[10px] md:px-[15px] rounded-[4px] hover:bg-[#F15A24] transition-colors w-full md:w-auto"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
