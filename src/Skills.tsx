import { ReactNode } from "react";
import GlitchText from "./components/GlitchText";
interface SkillContainerProps {
  skillTitle: string;
  children: ReactNode;
}

interface SkillProps {
  text: string;
  color: string;
}

function SkillContainer({ skillTitle, children }: SkillContainerProps) {
  return (
    <div className="mb-4">
      <p>{skillTitle}</p>
      <div className="skills-container flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

function Skill({ color, text }: SkillProps) {
  return (
    <p className={`${color} dark:bg-black handwritten px-3 rounded-full mx-1`}>
      <GlitchText text={text} />
    </p>
  );
}

const Skills = () => {
  return (
    <>
      <div id="skills-content">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-24 mb-24">
          <div className="skill-container">
            <img
              src="images/ipad.png"
              alt="drawing of an ipad"
              height="220px"
            />
            <div className="skill-label" id="skill-pink">
              <SkillContainer skillTitle="web development:">
                <Skill color="bg-pink-700" text="html" />
                <Skill color="bg-pink-700" text="css" />
                <Skill color="bg-pink-700" text="js" />
                <Skill color="bg-pink-700" text="react" />
              </SkillContainer>
              <SkillContainer skillTitle="web+graphic design:">
                <Skill color="bg-pink-700" text="figma" />
                <Skill color="bg-pink-700" text="canva" />
              </SkillContainer>
            </div>
          </div>
          <div className="skill-container">
            <img
              src="images/keybwmouse.png"
              alt="drawing of a keyboard and a mouse"
              height="220px"
            />
            <div className="skill-label" id="skill-green">
              <SkillContainer skillTitle="programming:">
                <Skill color="bg-green-600" text="python" />
                <Skill color="bg-green-600" text="java" />
              </SkillContainer>
              <SkillContainer skillTitle="database management:">
                <Skill color="bg-green-600" text="nosql" />
                <Skill color="bg-green-600" text="sql" />
              </SkillContainer>
            </div>
          </div>
        </div>
        <div className="skill-container lg:w-1/2 m-auto">
          <img
            src="images/camera.png"
            alt="drawing of a camera"
            height="220px"
          />
          <div className="skill-label" id="skill-gray">
            <SkillContainer skillTitle="photo/video editing:">
              <Skill color="bg-gray-600" text="photoshop" />
              <Skill color="bg-gray-600" text="movavi" />
            </SkillContainer>
            <SkillContainer skillTitle="illustration:">
              <Skill color="bg-gray-600" text="procreate" />
            </SkillContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
