import { skillType } from "../types/Types";
import { skills } from "../data/Data";

const Skills = () => {
  return (
    <>
      <h2>
        <span className="underline">Skills</span>
      </h2>
      <div className="skills-container">
        {skills.map((skill: skillType, index: number) => (
          <div
            className="skill-wrapper"
            key={index}
          >
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
