const ToggleButton = () => {
  const toggleTheme = () => {
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  };
  return (
    <>
      <button onClick={toggleTheme} className="ml-auto">
        <div
          id="toggle-light"
          className="flex flex-wrap items-center inline dark:hidden">
          <img
            className="hover:animate-pulse"
            src="images/controller.png"
            width="90px"
            alt="controller icon"
          />
          <p>
            <span>light mode</span>
          </p>
        </div>
        <div
          id="toggle-dark"
          className="flex flex-wrap items-center flex-row-reverse hidden dark:flex">
          <img
            className="hover:animate-pulse"
            src="images/controller.png"
            width="90px"
            alt="controller icon"
          />
          <p>
            <span>dark mode</span>
          </p>
        </div>
      </button>
    </>
  );
};

export default ToggleButton;
