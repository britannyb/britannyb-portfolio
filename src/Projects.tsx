import { useRive, useStateMachineInput } from "rive-react";
import Project from "./components/Project";
import HoverLink from "./components/HoverLink";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

function Projects() {
  const state_machine_nameB = "State Machine 1";
  const { rive, RiveComponent } = useRive({
    src: "animations/ipad_girl.riv",
    stateMachines: state_machine_nameB,
    isTouchScrollEnabled: true,
    autoplay: true,
  });

  const onHoverInputB = useStateMachineInput(rive, state_machine_nameB);

  return (
    <>
      <div>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div
            id="project-content"
            className="grid grid-cols-1 xl:grid-cols-4 items-center"
          >
            <div className="text-center xl:text-right">
              <h2>
                <mark className="text-white bg-dark-grey dark:text-dark-grey dark:bg-white">
                  projects
                </mark>
              </h2>
              <p className="text-4xl">some of my favorite & recent projects</p>
            </div>
            <div className="col-span-2">
              <RiveComponent
                onMouseOver={() => onHoverInputB?.fire()}
                className="ipadGirl"
              />
            </div>
            <div id="project-images" className="hidden xl:inline">
              <img src="images/blogo.png" width="200px" />
              <img src="images/motiveatlogo.png" width="240px" />
              <img src="images/fuwanekologo.png" width="200px" />
            </div>
          </div>
        </ScrollAnimation>

        <div id="project-container">
          <Project
            logo="projects/1logo.png"
            title="helpcare prototype"
            description="a desktop interface for an appliction used for online health consultations."
            link="https://www.figma.com/design/OblFEXcUSwfGDll900FlOA/HelpCare?node-id=6-3"
            imageURL="projects/1.jpg"
            paletteColors={["D6F3D5", "86D19B", "539B9D", "525252"]}
          />
          <Project
            logo="projects/3logo.png"
            title="vaccinehelp design"
            description="a form interface designed for an application concerned with vaccination distribution."
            link="https://www.figma.com/design/dWQSisktmgE2u9Wyz8EzMA/VaccineHelp?node-id=0-1&t=A9gLtmoCtNvjfU09-0"
            imageURL="projects/3.jpg"
            display="flex-row-reverse"
            paletteColors={["DDEEF5", "50C0ED", "0679D6", "525252"]}
          />
          <Project
            logo="projects/2logo.png"
            title="motiveat web app"
            description="my capstone project which is a meal planner that allows users to scan ingredients using their camera. It applies machine learning through Tensorflow.js."
            link="https://motiveat.vercel.app/"
            imageURL="projects/2.jpg"
            paletteColors={["65C2AF", "42A46A", "D78862", "202020"]}
          />
          <Project
            logo="projects/7logo.png"
            title="rest in paws design"
            description="a simple animal memorialization webpage design. It was developed to demonstrate client and server side scripts."
            link="https://www.figma.com/design/8dMUKVdnJbOF0bIyrHIcsT/petMemorial?node-id=0-1&t=SpWqvSzaZZwFY9je-1"
            imageURL="projects/7.jpg"
            display="flex-row-reverse"
            paletteColors={["405D72", "758694", "F7E7DC", "FFF8F3"]}
          />
          <Project
            logo="projects/4logo.png"
            title="portfolio v1 website"
            description="the first version of my portfolio website featuring some of my college projects. It was made mostly using vanilla HTML, CSS, and Javascript + jQuery."
            link="https://britannyb.github.io/"
            imageURL="projects/4.jpg"
            paletteColors={["BEBEBE", "EC968D", "C774CD", "454545"]}
          />
          <Project
            logo="projects/5logo.png"
            title="portfolio v2 website"
            description="the second version of my portfolio website featuring some of my grad school projects. It was made with react, vite, and tailwind."
            link="https://britanny-portfolio.vercel.app/"
            imageURL="projects/5.jpg"
            display="flex-row-reverse"
            paletteColors={["FEB9C6", "B96B85", "048399", "005067"]}
          />
          <Project
            logo="projects/6logo.png"
            title="fuwa neko designs"
            description="logo and poster design for a friend's booth that sells Japanese desserts."
            link="https://www.behance.net/gallery/178656975/Fuwa-Neko-(Snacks)-Menu-and-Poster-Designs"
            imageURL="projects/6.jpg"
            paletteColors={["D3EEE9", "69CBB2", "525AAA", "383F65"]}
          />
        </div>

        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
          <div className="lg:mt-24 project-text">
            <h3>
              <mark className="text-white bg-light-grey dark:text-dark-grey dark:bg-white">
                drawings
              </mark>
            </h3>
            <p>drawings by me</p>
            <div
              id="drawings-gallery"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 py-12"
            >
              <img
                src="projects/art1.jpg"
                alt="Alt fan art by me"
                className="border-4 border-dashed border-black dark:border-white"
              />
              <img
                src="projects/art2.jpg"
                alt="You fan art by me"
                className="border-4 border-dashed border-black dark:border-white"
              />
              <img
                src="projects/art3.jpg"
                alt="Portal fan art by me"
                className="border-4 border-dashed border-black dark:border-white"
              />
              <img
                src="projects/art4.jpg"
                alt="Johnny Silverhand fan art by me"
                className="col-span-2 border-4 border-dashed border-black dark:border-white hidden lg:inline"
              />
              <img
                src="projects/art5.jpg"
                alt="Vaultboy fan art by me"
                className="border-4 border-dashed border-black dark:border-white"
              />
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
          <div className="lg:mt-24 project-text">
            <h3>
              <mark className="text-white bg-light-grey dark:text-dark-grey dark:bg-white">
                photography
              </mark>
            </h3>
            <p>nendoroid photography by me</p>
            <div
              id="toy-gallery"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 py-12"
            >
              <img src="projects/toy1.jpg" alt="Hatsune Miku nendography" />
              <img src="projects/toy2.jpg" alt="Isabelle nendography" />
              <img src="projects/toy3.jpg" alt="Kirby nendography" />
              <img src="projects/toy4.jpg" alt="Bayonetta nendography" />
              <img src="projects/toy5.jpg" alt="Doom Slayer nendography" />
              <img
                src="projects/toy6.jpg"
                alt="Johnny Silverhand nendography"
              />
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
          <div className="lg:mt-24 project-text">
            <h3>
              <mark className="text-white bg-light-grey dark:text-dark-grey dark:bg-white">
                research
              </mark>
            </h3>
            <p>journal article(s) by me</p>
            <div className="article-text py-12">
              <div className="article-content border-4 border-dashed border-black dark:border-white">
                <p className="article-title">
                  An Overview of the Networking Issues of Cloud Gaming: A
                  Literature Review
                </p>
                <p>
                  links:{" "}
                  <HoverLink
                    titleText="researchgate"
                    linkContent="https://www.researchgate.net/publication/366602157_An_Overview_of_the_Networking_Issues_of_Cloud_Gaming_A_Literature_Review"
                  />{" "}
                  <HoverLink
                    titleText="journal link"
                    linkContent="https://ejournal.pnc.ac.id/index.php/jinita/article/view/1581"
                  />
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
}

export default Projects;
