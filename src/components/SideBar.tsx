import { useThemeContext } from "../context/ThemeContext";
import { useTempScaleContext } from "../context/TempScaleContext";
import { useWeatherContext } from "../context/WeatherContext";
import SearchCity from "./SearchCity";
import { useLocationContext } from "../context/LocationContext";
import { useEffect, useState } from "react";
import toTitleCase from "../utils/toTitleCase";
import { formatToDay, formatToHour24 } from "../utils/timeUtils";
import { useQueryValueContext } from "../context/QueryValueContext";

function SideBar() {

  const { theme } = useThemeContext();
  const { tempScale } = useTempScaleContext();
  const { weather } = useWeatherContext();
  const { location } = useLocationContext();
  const { queryValue } = useQueryValueContext();

  const [day, setDay] = useState<string>();
  const [hour, setHour] = useState<string>();

  

  useEffect(() => {
    setDay(formatToDay(weather.dt, weather.timezone));
    setHour(formatToHour24(weather.dt, weather.timezone));
  }, [weather.dt, weather.timezone, tempScale, weather.temperature]);
  
  


  return (
    <div className={`flex flex-col h-full px-8 py-6 rounded-xl ${theme === "cupcake"? "bg-divBase" : "bg-divBaseNight"}`}>
      {/* Search Location  */}
      
      <SearchCity/>


      <div className="flex flex-col mt-4 md:flex-row md:mx-4 lg:flex-col lg:mx-0 md:justify-around">
        {/* Weather Icon */}
        <img src={`/icons/${weather.icon}.svg`} className={`self-center w-1/2 ${queryValue > 0 ? "opacity-40" : ""} lg:w-3/4`} />

        <div className="divider divider-horizontal"></div>

        {/* Temperature, Day, and Time */}
        <div className="flex flex-col items-start gap-4 md:items-start md:flex-col md:justify-center">

          <div className="flex flex-col w-full lg:flex-row lg:items-end lg:justify-between">

            <div className="flex self-center w-48 mb-4 md:mb-9 lg:mb-0">
              <h1 className="font-light text-8xl">{tempScale === "metric" ? Math.round(weather.temperature ?? 0) : Math.round((weather.temperature ?? 0 * 9/5) + 32)}</h1>
              {tempScale === "metric" ? 
              (<h1 className="text-5xl font-light sm:text-6xl">&deg;C</h1>)
              :
              (<h1 className="text-5xl font-light sm:text-6xl">&deg;F</h1>)
            }
            </div>

            <div className="divider divider-horizontal"></div>
            
            <div>
              <h2 className="text-xl sm:text-lg">{day},</h2>
              
              <p className="text-lg text-gray-500 sm:text-xl">{hour}</p>
            </div>
            
          </div>

          <div>
            <p className="text-lg sm:text-xl lg:mt-5">{toTitleCase(weather.weatherDescription)}</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="divider divider-info"></div>

      {/* City Image */}
      <div className="relative overflow-hidden bg-black rounded-xl md:h-72 sm:h-52 lg:basis-52">
        <img
          src="/images/sky-image.jpg"
          className="object-cover w-full opacity-50 rounded-xl"
        />
        <p className="absolute inset-0 flex items-center justify-center px-10 tracking-widest text-center text-white text-md lg:text-sm z-1">
          {location.city}
        </p>
      </div>
    </div>
  );
}

export default SideBar;
