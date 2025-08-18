import React from "react";
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaInstagram, 
  FaFacebookF, 
  FaLinkedinIn, 
  FaYoutube, 
  FaWhatsapp 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#46171A] text-[#e6e4d8] py-16 px-5 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(222,198,170,0.05)_0,transparent_70%)] animate-[float_12s_ease-in-out_infinite]"></div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start relative z-[2]">
        
        {/* Newsletter Block */}
        <div className="group flex flex-col items-center text-center gap-3 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <h3 className="text-2xl font-normal text-[#d9cfa8] mb-1 relative">
            Subscribe to our Newsletter
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#d9cfa8] to-[#e6dcc0] transition-all duration-600 group-interaction:w-full"></span>
          </h3>
          <p className="text-sm text-[#d9d4c8] mb-2 transition-colors duration-300 group-interaction:text-[#e6dcc0]">
            Want to be the first to read our news? Subscribe to keep abreast of all events
          </p>
          <form className="flex gap-3 flex-wrap justify-center" aria-label="Subscribe to newsletter">
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="flex-1 min-w-[300px] px-4 py-2 rounded-full border border-[#d9d4c8] text-sm outline-none transition-all duration-300 focus:-translate-y-0.5 focus:shadow-lg shadow-md"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-br from-[#D44D1F] to-[#e67e22] text-white font-semibold rounded-full transition-all duration-400 interaction:-translate-y-0.5 interaction:shadow-lg"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Block */}
        <div className="group flex flex-col items-center text-center gap-3 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
          <h3 className="text-xl font-normal text-[#d9cfa8] mb-1 relative">
            Get in touch with us
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#d9cfa8] to-[#e6dcc0] transition-all duration-600 group-interaction:w-full"></span>
          </h3>
          <img
            src="./location.png"
            alt="Location map"
            loading="lazy"
            className="w-full max-w-[320px] rounded-xl cursor-pointer shadow-xl mt-5 interaction:scale-105 transition-all duration-300"
          />
        </div>

        {/* Branding Block */}
        <div className="group flex flex-col items-center text-center gap-3 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
          <div className="flex flex-col items-center gap-2">
            <div className="w-24">
              <img src="./logofooter.png" alt="Ulu Amir Group Logo" />
            </div>
            <div className="text-[#e6e4d8] text-sm">Ulu Amir Group</div>
          </div>
          <p className="text-sm text-[#d4d2c5] leading-relaxed mt-2 transition-all duration-300 group-interaction:text-[#e6dcc0] group-interaction:translate-x-1">
            Craft businesses that reflect excellence, elevate local identity, and resonate with global standards.
          </p>

          {/* Contact Info */}
          <div className="mt-4 space-y-3 flex flex-col items-center">
            <div className="flex flex-col gap-2">

              <div className="group flex gap-3 items-center p-1 rounded-lg transition-all duration-300 interaction:bg-[rgba(255,255,255,0.05)] interaction:translate-x-1">
                <div className="text-white p-1.5 rounded-full bg-[rgba(255,255,255,0.1)] transition-all duration-300 group-interaction:bg-[#D44D1F]">
                  <FaPhone className="text-sm" />
                </div>
                <div className="text-sm">
                  <div>+62 811 3960 6303</div>
                  <div>+971 561 313137</div>
                </div>
              </div>

              <div className="group flex gap-3 items-center p-1 rounded-lg transition-all duration-300 interaction:bg-[rgba(255,255,255,0.05)] interaction:translate-x-1">
                <div className="text-white p-1.5 rounded-full bg-[rgba(255,255,255,0.1)] transition-all duration-300 group-interaction:bg-[#D44D1F]">
                  <FaEnvelope className="text-sm" />
                </div>
                <div className="text-sm">
                  <div>office@uluamirgroup.com</div>
                </div>
              </div>

              <div className="group flex gap-3 items-center p-1 rounded-lg transition-all duration-300 interaction:bg-[rgba(255,255,255,0.05)] interaction:translate-x-1">
                <div className="text-white p-1.5 rounded-full bg-[rgba(255,255,255,0.1)] transition-all duration-300 group-interaction:bg-[#D44D1F]">
                  <FaMapMarkerAlt className="text-sm" />
                </div>
                <div className="text-sm">
                  <div>Uluwatu, Bali – Indonesia</div>
                  <div className="text-xs text-[#c8c5b7] mt-1 transition-colors duration-300 group-interaction:text-[#d9d4c8]">
                    Open <strong>Monday - Friday</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4 justify-center">
              {[FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="group w-12 h-12 rounded-full bg-[#d9cfa8] flex items-center justify-center text-[#4B1D1F] transition-all duration-300
                             interaction:bg-[#D44D1F] interaction:-translate-y-1 interaction:shadow-md"
                >
                  <Icon className="text-base" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links Block */}
        <div className="flex flex-col items-center text-center gap-4 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
          <h3 className="text-lg font-semibold text-white transition-colors duration-300 interaction:text-[#d9cfa8]">
            Quick Links
          </h3>
          <ul className="flex lg:flex-col flex-wrap justify-center text-sm gap-2">
            {['Home', 'Our Venture', 'About Us', 'Contact Us', 'On Nar', 'Blogs', 'FAQs'].map((link) => (
              <li key={link} className="group transition-all duration-300">
                <a 
                  href="#" 
                  className="text-[#c8c5b7] px-3 py-1 rounded-full inline-block transition-all duration-300
                             group-interaction:text-white 
                             group-interaction:bg-[rgba(255,255,255,0.1)] 
                             group-interaction:scale-105"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
