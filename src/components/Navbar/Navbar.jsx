import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-responsive ${
        isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="text-white py-3 sm:py-4 lg:py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg sm:text-xl lg:text-2xl font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Surya</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Manoj</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] text-base lg:text-lg transition-colors duration-200 ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-3 lg:space-x-4">
          <a
            href="https://github.com/suryamanoj07"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition-colors duration-200"
          >
            <FaGithub size={24} className="lg:w-7 lg:h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/surya-manoj-b309a8281/"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition-colors duration-200"
          >
            <FaLinkedin size={24} className="lg:w-7 lg:h-7" />
          </a>
          <a
            href="https://leetcode.com/suryamanoj"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition-colors duration-200"
          >
            <SiLeetcode size={24} className="lg:w-7 lg:h-7" />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-2xl sm:text-3xl text-[#8245ec] cursor-pointer transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-2xl sm:text-3xl text-[#8245ec] cursor-pointer transition-colors duration-200"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#050414] bg-opacity-95 backdrop-filter backdrop-blur-lg z-50 shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-6 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white text-lg font-medium transition-colors duration-200 ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-6 pt-4">
              <a
                href="https://github.com/suryamanoj07"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec] transition-colors duration-200"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/surya-manoj-b309a8281/"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec] transition-colors duration-200"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://leetcode.com/suryamanoj"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec] transition-colors duration-200"
              >
                <SiLeetcode size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
