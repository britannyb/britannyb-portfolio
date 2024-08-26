import HoverLink from "./HoverLink";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

interface ProjectContentProps {
  title: string;
  description: string;
  logo: string;
  imageURL: string;
  link: string;
  display?: string;
  paletteColors: string[];
}

interface ColorProps {
  colors: string[];
}

function ColorPalette({ colors }: ColorProps) {
  const colorsArray = colors.map((color, i) => {
    return (
      <div
        key={i}
        style={{ backgroundColor: `#${color}` }}
        className="w-10 h-10 rounded-full inline-block -ml-4"
      ></div>
    );
  });
  return <div className="ml-4">{colorsArray}</div>;
}

function Project({
  title,
  description,
  logo,
  imageURL,
  link,
  display,
  paletteColors,
}: ProjectContentProps) {
  return (
    <>
      <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
        <div className={`xl:flex gap-4 items-center project-info ${display}`}>
          <div>
            <img
              src={logo}
              alt="logo image of project"
              className="project-logo"
            />
            <ColorPalette colors={paletteColors} />
            <p>{description}</p>
            <p>
              preview: <HoverLink titleText={title} linkContent={link} />
            </p>
          </div>
          <img
            src={imageURL}
            alt="sample images of project"
            className="project-img border-4 border-dashed border-black dark:border-white m-auto"
          />
        </div>
      </ScrollAnimation>
      <div className="mb-20 xl:mb-12"></div>
    </>
  );
}

export default Project;
