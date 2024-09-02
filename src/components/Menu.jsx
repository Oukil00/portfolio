import { useState, useEffect } from "react";

const Menu = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className="text-lg tracking-wider translate-x-[180px] leading-10 border shadow-xl border-text-slate-300 text-[#00040f] dark:text-slate-300 mt-5 max-w-[150px] p-3 rounded-lg hidden bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040F] dark:to-[#0B274C] max-sm:block"
    >
      <ul className="pl-2 space-y-2">
        <li>
          <a href="#about" className="hover:text-blue-500 dark:hover:text-blue-300">Home</a>
        </li>
        <li>
          <a href="#experience" className="hover:text-blue-500 dark:hover:text-blue-300">Experience</a>
        </li>
        <li>
          <a href="#education" className="hover:text-blue-500 dark:hover:text-blue-300">Education</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-300">Projects</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-300">Contact</a>
        </li>
        <button
          className="text-xl font-semibold tracking-widest mt-4 px-4 py-2 rounded-md border border-transparent dark:border-slate-400 dark:bg-slate-700 bg-blue-500 text-white hover:bg-blue-600 dark:hover:bg-slate-600 transition"
          onClick={handleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
        </button>
      </ul>
    </div>
  );
};

export default Menu;
