import { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[8vw] xl:px-[6vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-responsive-3xl sm:text-responsive-4xl font-bold text-white mb-4">PROJECTS</h2>
        <div className="w-16 sm:w-24 h-1 bg-purple-500 mx-auto mb-4"></div>
        <p className="text-responsive-base sm:text-responsive-lg text-gray-400 font-semibold max-w-3xl mx-auto">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:gap-8 lg:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="p-6 sm:p-8 lg:p-4 xl:p-6">
              <h3 className="text-responsive-lg sm:text-responsive-xl lg:text-base xl:text-2xl font-bold text-white mb-4 lg:mb-4">
                {project.title}
              </h3>
              <p className="text-responsive-sm sm:text-responsive-base lg:text-xs xl:text-base text-gray-500 mb-6 lg:mb-4 leading-relaxed line-clamp-4">
                {project.description}
              </p>
              <div className="mb-4 lg:mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs sm:text-sm lg:text-xs font-semibold text-purple-500 rounded-full px-3 py-2 mr-2 mb-2 lg:px-2 lg:py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-2xl lg:max-w-4xl overflow-hidden relative max-h-[90vh] overflow-y-auto">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-2xl sm:text-3xl font-bold hover:text-purple-500 transition-colors duration-200"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="px-4 sm:px-6 lg:px-8 pb-6">
                <h3 className="text-responsive-xl sm:text-responsive-2xl lg:text-responsive-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-responsive-sm sm:text-responsive-base lg:text-responsive-lg text-gray-400 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs sm:text-sm font-semibold text-purple-500 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 hover:bg-purple-800 text-gray-400 px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-responsive-sm sm:text-responsive-base lg:text-responsive-lg font-semibold text-center transition-colors duration-200"
                  >
                    View Code
                  </a>
                  {selectedProject.webapp && (
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-purple-600 hover:bg-purple-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-responsive-sm sm:text-responsive-base lg:text-responsive-lg font-semibold text-center transition-colors duration-200"
                    >
                      View Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
