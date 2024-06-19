import React, { useState } from "react";
import { useTempScaleContext } from "../context/TempScaleContext";
import ThemeSwitcher from "./ThemeSwitcher";

type HeaderPropsType = React.ComponentPropsWithoutRef<"section">;

function Header(props: HeaderPropsType) {
  const { className, ...rest } = props;

  const [active, setActive] = useState(true);
  const { setTempScale } = useTempScaleContext();

  const toggleCelsius = () => {
    setActive((prevState) => !prevState);
    setTempScale("metric");
  };

  const toggleFahrenheit = () => {
    setActive((prevState) => !prevState);
    setTempScale("imperial");
  };

  const baseClassName = "items-center justify-between mx-4 mb-4 lg:mx-0";

  return (
    <section {...rest} className={`${baseClassName} ${className}`}>
      <div className="space-x-2">
        <button
          className={`btn btn-circle btn-outline btn-sm text-xs ${
            active && "btn-active"
          }`}
          onClick={toggleCelsius}
        >
          &deg;C
        </button>
        <button
          className={`btn btn-circle btn-outline btn-sm text-xs ${
            !active && "btn-active"
          }`}
          onClick={toggleFahrenheit}
        >
          &deg;F
        </button>
      </div>
      
      <ThemeSwitcher />
    </section>
  );
}

export default Header;
