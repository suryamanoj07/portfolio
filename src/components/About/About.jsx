import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="pt-4 pb-8 sm:py-8 lg:py-8 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-8 sm:mt-12 lg:mt-16"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center gap-6 lg:gap-12 xl:gap-16">
        {/* Left Side: Text Block */}
        <div className="w-full lg:w-2/3 text-center lg:text-left flex flex-col justify-center">
          <h1 className="text-responsive-3xl sm:text-responsive-4xl lg:text-lg xl:text-responsive-5xl font-bold text-white mb-4 lg:mb-6 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-responsive-4xl sm:text-responsive-5xl lg:text-xl xl:text-responsive-6xl font-bold text-white mb-6 lg:mb-8 leading-tight">
            Surya Manoj
          </h2>
          {/* Social Icons for mobile only - now below the name */}
          <div className="flex justify-center gap-4 mb-4 lg:hidden">
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
          <h3 className="text-responsive-xl sm:text-responsive-2xl lg:text-base xl:text-responsive-3xl font-semibold mt-2 lg:mt-4 mb-8 lg:mb-10 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'AI/ML Enthusiast ',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          <div className="text-responsive-base sm:text-responsive-lg lg:text-sm text-gray-400 mb-6 lg:mb-8 leading-7 space-y-5">
            <p className="text-justify lg:text-left lg:text-sm">
              I am a passionate and curious learner currently pursuing my B.Tech in Computer Science from Indian Institute of Indian Institute of Information Technology Sri City. I enjoy building web applications and solving real-world problems through code.
            </p>
            <p className="hidden sm:block text-justify lg:text-left lg:text-sm">
              I am skilled in frontend and backend development, and I actively practice problem-solving on LeetCode. I also have a growing interest in AI/ML, and I&apos;ve completed internships where I worked on real-world projects. I am always open to learning new technologies and improving my skills, and I&apos;m looking forward to starting my journey as a software developer.
            </p>
          </div>
          <a
            href="https://drive.google.com/file/d/1b8Y5Yg0Oh2wYOYp_7PUjLlFLH8xVkqNx/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto self-center lg:self-start text-white py-3 px-6 sm:px-8 rounded-full text-responsive-base sm:text-responsive-lg lg:text-sm font-bold transition duration-300 transform hover:scale-105 hover:shadow-lg"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            VIEW RESUME
          </a>
        </div>
        {/* Right Side: Image */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mb-6 lg:mb-0">
          <div className="relative flex justify-center items-center">
            <Tilt
              className="w-48 h-48 sm:w-56 sm:h-56 lg:w-48 lg:h-48 xl:w-72 xl:h-72 border-4 border-purple-700 rounded-full"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <img
                src={profileImage}
                alt="Surya Manoj"
                className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
              />
            </Tilt>
            {/* Decorative background circle */}
            <div className="absolute inset-0 w-48 h-48 sm:w-56 sm:h-56 lg:w-48 lg:h-48 xl:w-72 xl:h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
