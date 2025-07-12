import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[8vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-responsive-3xl sm:text-responsive-4xl font-bold text-white mb-4">EXPERIENCE</h2>
        <div className="w-16 sm:w-24 h-1 bg-purple-500 mx-auto mb-4"></div>
        <p className="text-responsive-base sm:text-responsive-lg text-gray-400 font-semibold max-w-3xl mx-auto">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 sm:left-1/2 transform -translate-x-2 sm:-translate-x-0.5 w-0.5 bg-white h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-start mb-12 lg:mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className=" absolute left-0 sm:left-1/2 transform -translate-x-2 sm:-translate-x-3 bg-gray-400 border-4 border-[#8245ec] w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md lg:max-w-md p-2 sm:p-4 lg:p-4 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md ${
                index % 2 === 0 ? "sm:ml-0 lg:ml-0" : "sm:mr-0 lg:mr-0"
              } sm:ml-16 sm:mr-16 ml-0 mr-0 lg:ml-0 lg:mr-0 transform transition-transform duration-300 hover:scale-105`}
            >
              <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-3">
                {/* Company Logo/Image */}
                <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-10 lg:h-10 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-responsive-base sm:text-responsive-lg lg:text-base font-semibold text-white mb-1">
                      {experience.role}
                    </h3>
                    <h4 className="text-xs sm:text-responsive-base lg:text-xs text-gray-300 mb-2">
                      {experience.company}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500">{experience.date}</p>
                </div>
              </div>
              <p className="mt-2 text-xs sm:text-responsive-base lg:text-xs text-gray-400 leading-relaxed">
                {experience.desc}
              </p>
              <div className="mt-2">
                <h5 className="font-medium text-white text-xs sm:text-responsive-base lg:text-xs mb-2">Skills:</h5>
                <ul className="flex flex-wrap gap-1 sm:gap-2 lg:gap-1">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#8245ec] text-gray-300 px-2 py-0.5 text-[10px] sm:text-sm lg:text-[10px] rounded-lg border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
