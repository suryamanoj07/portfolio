// import React from "react";


const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 sm:py-12 px-responsive">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-responsive-lg sm:text-responsive-xl font-semibold text-purple-500 mb-4">Surya Manoj</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 sm:mt-6">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-responsive-sm sm:text-responsive-base transition-colors duration-200"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}


        {/* Copyright Text */}
        <p className="text-responsive-sm text-gray-400 mt-6 sm:mt-8">
          © 2025 Surya Manoj. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
