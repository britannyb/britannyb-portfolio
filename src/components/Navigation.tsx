import { Link, animateScroll as scroll } from "react-scroll";
import ToggleButton from "./ToggleButton";

const Navigation = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <div className="hidden lg:inline">
        <header className="flex flex-wrap items-center fixed top-0 right-0 bg-dark-grey shadow-xl w-full">
          <nav>
            <ul className="flex flex-wrap items-center">
              <li className="mr-12 hover:cursor-pointer hover:animate-pulse">
                <img
                  onClick={scrollToTop}
                  src="images/logo.PNG"
                  width="80px"
                  height="80px"
                  alt="pencil logo"
                />
              </li>
              <Link activeClass="active" smooth spy to="skills">
                <li className="hover:cursor-pointer hover:animate-pulse">
                  <img
                    src="images/headset.png"
                    width="70px"
                    alt="headset icon"
                  />
                  <p>skills</p>
                </li>
              </Link>
              <Link activeClass="active" smooth spy to="projects">
                <li className="hover:cursor-pointer hover:animate-pulse">
                  <img src="images/ipad.png" width="70px" alt="ipad icon" />
                  <p>projects</p>
                </li>
              </Link>
              <Link activeClass="active" smooth spy to="about">
                <li className="hover:cursor-pointer hover:animate-pulse">
                  <img src="images/toy.png" width="70px" alt="toy icon" />
                  <p>about</p>
                </li>
              </Link>
            </ul>
          </nav>
          <ToggleButton />
        </header>
      </div>
    </>
  );
};

export default Navigation;
