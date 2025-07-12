import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8 lg:mb-12">
      <h2 className="text-responsive-3xl sm:text-responsive-4xl font-bold text-white mb-4">SKILLS</h2>
      <div className="w-16 sm:w-24 h-1 bg-[#8245ec] mx-auto mb-4"></div>
      <p className="text-responsive-base sm:text-responsive-lg text-gray-400 font-semibold max-w-3xl mx-auto">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 py-8 lg:py-12">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-6 lg:py-8 rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-105"
        >
          <h3 className="text-responsive-xl sm:text-responsive-2xl lg:text-responsive-3xl font-semibold text-gray-400 mb-6 text-center">
            {category.title}
          </h3>

          {/* Skill Items */}
          <Tilt
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-2xl py-2 px-3 sm:py-3 sm:px-4 text-center transition-all duration-300 hover:border-[#8245ec] hover:bg-[#8245ec]/10"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                  />
                  <span className="text-xs sm:text-sm lg:text-base text-gray-300 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
