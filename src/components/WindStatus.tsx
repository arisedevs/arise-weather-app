import icon from "../assets/icons/wind-direction.svg";
import { useThemeContext } from "../context/ThemeContext";
import { useWeatherContext } from "../context/WeatherContext";

const WindStatus = () => {

  const { theme } = useThemeContext();
  const { weather } = useWeatherContext();
  

  const rotateIcon = {
    transform: `rotate(${weather.windDegrees}deg`,
  }

  return (
      <div className={`p-5 px-10 space-y-5 ${theme === "cupcake"? "bg-divBase" : "bg-divBaseNight"} rounded-xl basis-[250px]`}>
        <h3 className="inline-block text-lg">Wind Status</h3>
        <div className="flex items-center gap-5">
          <div className="flex flex-col">
            <h1 className="text-5xl font-medium">{weather.windSpeed}</h1>
            <p className="text-lg">m/s</p>
          </div>
          <img src={icon} alt="wind-direction-icon" style={rotateIcon}/>
        </div>
      </div>
  );
};

export default WindStatus;
