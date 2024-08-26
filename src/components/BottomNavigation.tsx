import { Link, animateScroll as scroll } from "react-scroll";

const BottomNavigation = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <div id="bottomNav" className="inline lg:hidden">
        <header className="fixed bottom-0 left-0 bg-dark-grey shadow-xl w-full">
          <nav>
            <ul className="flex flex-wrap justify-center sm:gap-12 items-center">
              <li className="hover:cursor-pointer hover:animate-pulse">
                <img
                  onClick={scrollToTop}
                  src="images/logo.PNG"
                  width="60px"
                  height="60px"
                  alt="pencil logo"
                />
              </li>
              <Link activeClass="active" smooth spy to="skills">
                <li className="hover:cursor-pointer hover:animate-pulse">
                  <img
                    src="images/headset.png"
                    width="60px"
                    alt="headset icon"
                  />
                </li>
              </Link>
              <Link activeClass="active" smooth spy to="projects">
                <li className="hover:cursor-pointer hover:animate-pulse">
                  <img src="images/ipad.png" width="60px" alt="ipad icon" />
                </li>
              </Link>
              <Link activeClass="active" smooth spy to="about">
                <li className="hover:cursor-pointer hover:animate-pulse">
                  <img src="images/toy.png" width="60px" alt="toy icon" />
                </li>
              </Link>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default BottomNavigation;
