import { useEffect } from "react";
import { useThemeContext } from "../context/ThemeContext";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

function ThemeSwitcher() {

    const { theme, setTheme } = useThemeContext();

    const toggleTheme = () => {
        const newTheme = theme === "cupcake" ? "night" : "cupcake"
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
      }

      useEffect(() => {
        document.querySelector("html")?.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <>
        {theme === "cupcake" && (
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" name="screenMode" onClick={toggleTheme} />

          {/* sun icon */}
          <MdOutlineLightMode className="w-8 h-8 fill-accent swap-off" />

          {/* moon icon */}
          <MdDarkMode className="w-8 h-8 fill-primary swap-on" />
        </label>
      )}
      
      {theme === "night" && (
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" name="screenMode" onClick={toggleTheme} />

          {/* sun icon */}
          <MdOutlineLightMode className="w-8 h-8 fill-accent swap-on" />

          {/* moon icon */}
          <MdDarkMode className="w-8 h-8 fill-primary swap-off" />
        </label>
    )}
        </>
    )
}

export default ThemeSwitcher
