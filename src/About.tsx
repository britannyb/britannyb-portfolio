import { useRive, useStateMachineInput } from "rive-react";
import HoverLink from "./components/HoverLink";
import GlitchText from "./components/GlitchText";

function About() {
  const state_machine_nameC = "State Machine 1";
  const { rive, RiveComponent } = useRive({
    src: "animations/pencil_girl.riv",
    stateMachines: state_machine_nameC,
    isTouchScrollEnabled: true,
    autoplay: true,
  });

  const onHoverInputC = useStateMachineInput(rive, state_machine_nameC);

  return (
    <>
      <div>
        <div
          id="about-content"
          className="grid grid-cols-1 lg:grid-cols-2 items-center"
        >
          <div className="order-2 lg:order-1">
            <RiveComponent
              onMouseOver={() => onHoverInputC?.fire()}
              className="pencilGirl"
            />
          </div>
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2>
              <mark className="text-white bg-dark-grey dark:text-dark-grey dark:bg-white">
                <GlitchText text="about" />
              </mark>
            </h2>
            <br />
            <div className="lg:text-2xl text-left">
              <p>My name is Britanny and I made this website.</p>
              <img
                src="images/me.jpg"
                alt="a picture of me"
                height="600px"
                className="rounded-full border-4 border-dashed border-black dark:border-white m-auto lg:m-0"
              />
              <p>I am:</p>
              <ul>
                <li>
                  ⦿ a bachelor [Cum Laude] and master [Meritus] in Information
                  Technology (IT) degree holder.
                </li>
                <li>⦿ passionate in everything related to IT.</li>
              </ul>
              <p>
                Aside from programming, designing, and doing creative work; I
                love gaming and collecting toys.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex items-center lg:text-2xl" id="more-info">
          <img
            src="images/girls.jpg"
            alt="a picture of figures"
            height="400px"
            className="rounded-full border-4 border-dashed border-black dark:border-white m-auto hidden lg:inline"
          />
          <div>
            <p className="text-center lg:text-left lg:ml-16">
              Fun fact: I made the graphics in this web page. The doodle girls
              are inspired by a line of toys called “Peach Riot”. Also, if you
              hover near the doodle girls, their eyes will follow your cursor.
              The backgrounds are from Freepik, Pexels, and Vecteezy.
            </p>
            <br />
            <p id="links">
              more by me:{" "}
              <HoverLink
                titleText="behance"
                linkContent="https://www.behance.net/britannyb"
              />{" "}
              <HoverLink
                titleText="rive"
                linkContent="https://rive.app/@britannyb/"
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
