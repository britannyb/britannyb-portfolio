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
              <p>web+graphic design</p>
              <p>web development</p>
            </div>
          </div>
          <div className="skill-container">
            <img
              src="images/keybwmouse.png"
              alt="drawing of a keyboard and a mouse"
              height="220px"
            />
            <div className="skill-label" id="skill-green">
              <p>programming</p>
              <p>database management</p>
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
            <p>photo+video editing</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
