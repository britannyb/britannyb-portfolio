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

function App() {
  const state_machine_name = "State Machine 1";
  const { rive, RiveComponent } = useRive({
    src: "animations/laptop_girl.riv",
    stateMachines: state_machine_name,
    autoplay: true,
  });

  const onHoverInput = useStateMachineInput(rive, state_machine_name);

  return (
    <>
      <div className="w-screen bg-white text-black dark:bg-black dark:text-white lg:pt-[40px] xl:pt-[100px]">
        <Navigation />
        <section id="me">
          <div className="absolute top-0 left-0 lg:hidden z-10">
            <ToggleButton />
          </div>
          <div
            id="me-content"
            className="grid grid-cols-1 xl:grid-cols-2 items-center"
          >
            <div id="me-images">
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
            <div className="text-center xl:text-left">
              <h1>
                <mark>britanny</mark>
              </h1>
              <p className="text-4xl subtitle">creativity + logic</p>
            </div>
          </div>
        </section>

        <div className="parallax"></div>

        <section id="skills">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <h2>
              <mark>skills</mark>
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
