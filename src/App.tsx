import "./App.css";
import "./index.css";
import Navigation from "./components/Navigation";
import { useRive, useStateMachineInput } from "rive-react";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import Footer from "./components/Footer";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
import BottomNavigation from "./components/BottomNavigation";
import ToggleButton from "./components/ToggleButton";
import GlitchText from "./components/GlitchText";

function App() {
  const state_machine_name = "State Machine 1";
  const { rive, RiveComponent } = useRive({
    src: "animations/laptop_girl.riv",
    stateMachines: state_machine_name,
    isTouchScrollEnabled: true,
    autoplay: true,
  });

  const onHoverInput = useStateMachineInput(rive, state_machine_name);

  return (
    <>
      <div className="w-screen bg-white text-black dark:bg-black dark:text-white lg:pt-[40px] xl:pt-[100px]">
        <Navigation />
        <section id="me">
          <div className="z-1">
            <img src="images/toy.png" alt="toy image" id="toy" />
            <img
              src="images/controller.png"
              alt="controller image"
              id="controller"
            />
            <img src="images/ipad.png" alt="ipad image" id="ipad" />
            <img src="images/camera.png" alt="camera image" id="camera" />
          </div>
          <div className="absolute top-0 left-0 lg:hidden z-10">
            <ToggleButton />
          </div>
          <div
            id="me-content"
            className="grid grid-cols-1 xl:grid-cols-2 items-center">
            <div id="me-images">
              {!rive && (
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  role="loading">
                  <svg
                    aria-hidden="true"
                    className="w-16 h-16 lg:w-24 lg:h-24 text-gray-300 animate-spin dark:text-gray-600 fill-green-400"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
              )}
              <RiveComponent
                onMouseOver={() => onHoverInput?.fire()}
                className="laptopGirl"
              />
              <img
                src="images/setup.jpg"
                alt="a picture of my desk setup"
                width="220px"
                height="220px"
                className="hidden xl:inline"
              />
            </div>
            <div className="relative text-center xl:text-left">
              <h1>
                <mark className="text-white bg-light-grey dark:text-dark-grey dark:bg-white">
                  <GlitchText text="britanny" />
                </mark>
              </h1>
              <p className="text-4xl subtitle">
                <span>creativity + logic</span>
              </p>
            </div>
          </div>
        </section>

        <div className="parallax relative"></div>

        <section id="skills">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <h2>
              <mark className="text-white bg-dark-grey dark:text-dark-grey dark:bg-white">
                <GlitchText text="skills" />
              </mark>
            </h2>
            <Skills />
          </ScrollAnimation>
        </section>

        <section id="projects">
          <Projects />
        </section>

        <div className="parallaxB"></div>

        <section id="about">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <About />
          </ScrollAnimation>
        </section>

        <Footer />
      </div>
      <div className="mb-16 lg:mb-0"></div>
      <BottomNavigation />
    </>
  );
}

export default App;
