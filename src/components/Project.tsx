import HoverLink from "./HoverLink";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
import LinkIcon from "./LinkIcon";

interface ProjectContentProps {
  title: string;
  description: string;
  logo: string;
  imageURL: string;
  alt: string;
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
  alt,
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
            <p className="flex justify-center items-center">
              <span>
                <LinkIcon />
              </span>{" "}
              <HoverLink titleText={title} linkContent={link} />
            </p>
          </div>
          <div className="relative">
            <img
              src={imageURL}
              alt={alt}
              className="project-img border-4 border-dashed border-black dark:border-white m-auto"
            />
            <p
              className={`
        ${
          display === "flex-row-reverse"
            ? "hidden xl:block xl:top-0 xl:-left-4 xl:-rotate-[.2rad]"
            : "hidden xl:block xl:top-0 xl:-right-4 xl:rotate-[.2rad]"
        }
        absolute bg-black border border-dashed border-black text-white dark:border dark:border-gray-200 dark:bg-white dark:text-black rounded-sm shadow-md px-4 py-2 text-center md:text-sm
      `}
            >
              {alt}
            </p>
          </div>
        </div>
      </ScrollAnimation>
      <div className="mb-20 xl:mb-12"></div>
    </>
  );
}

export default Project;
