// import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-responsive-3xl sm:text-responsive-4xl font-bold text-white mb-4">EDUCATION</h2>
        <div className="w-16 sm:w-24 h-1 bg-purple-500 mx-auto mb-4"></div>
        <p className="text-responsive-base sm:text-responsive-lg text-gray-400 font-semibold max-w-3xl mx-auto">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 sm:left-1/2 transform -translate-x-2 sm:-translate-x-0.5 w-0.5 bg-white h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-start mb-12 lg:mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="md:hidden absolute left-0 sm:left-1/2 transform -translate-x-2 sm:-translate-x-3 bg-gray-400 border-4 border-[#8245ec] w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md lg:max-w-lg p-2 sm:p-4 lg:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-16 sm:mr-16 ml-6 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
                {/* School Logo/Image */}
                <div className="w-10 h-8 sm:w-16 sm:h-12 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-responsive-base sm:text-responsive-lg font-semibold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <h4 className="text-xs sm:text-responsive-base text-gray-300 mb-2">
                      {edu.school}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-xs sm:text-sm text-gray-500">{edu.date}</p>
                </div>
              </div>

              <p className="mt-2 text-xs sm:text-responsive-base text-gray-400 font-bold">Grade: {edu.grade}</p>
              <p className="mt-2 text-xs sm:text-responsive-base text-gray-400 leading-relaxed">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
