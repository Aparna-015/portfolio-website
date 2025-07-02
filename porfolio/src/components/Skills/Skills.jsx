// src/components/Skills/Skills.jsx
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-20 px-6 sm:px-12 lg:px-24 bg-skills-gradient clip-path-custom font-sans"
  >
    <div className="text-center mb-24  mt-20">
      <h2 className="text-4xl sm:text-5xl font-bold text-white">Skills</h2>
      <div className="w-20 h-1 bg-[#8245ec] mx-auto mt-3"></div>
      <p className="text-gray-300 mt-5 text-base sm:text-lg max-w-xl mx-auto font-medium">
        A collection of my technical skills and expertise honed through various projects and experiences.
      </p>
    </div>

    {/* Skill Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {SkillsInfo.flatMap((category) => category.skills).map((skill) => (
        <Tilt
          key={skill.name}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          scale={1.05}
          transitionSpeed={700}
          gyroscope={true}
        >
          <div className="flex flex-col items-center justify-center bg-white/10 border border-gray-700 hover:border-[#8245ec] rounded-xl p-6 shadow-lg transition-all duration-300">
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="w-12 h-12 sm:w-14 sm:h-14 mb-4"
            />
            <span className="text-sm sm:text-base text-gray-200 text-center font-medium">
              {skill.name}
            </span>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;
