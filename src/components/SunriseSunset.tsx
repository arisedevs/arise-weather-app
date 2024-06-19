import { GiSunrise } from "react-icons/gi";
import { GiSunset } from "react-icons/gi";
import { useThemeContext } from "../context/ThemeContext";
import { useWeatherContext } from "../context/WeatherContext";
import useGetSunriseSunset from "../hooks/useGetSunriseSunset";

function SunriseSunset() {
  
  const { theme } = useThemeContext();
  const { weather } = useWeatherContext();
  const { sunrise, sunset, sunriseDifference, sunsetDifference } = useGetSunriseSunset({sunriseTimestamp: weather.sunrise, sunsetTimestamp: weather.sunset, yesterdaySunriseTimestamp: weather.yesterdaySunrise, yesterdaySunsetTimestamp: weather.yesterdaySunset, timezone: weather.timezone})

  return (
    <div className={`p-5 px-10 space-y-5 ${theme === "cupcake"? "bg-divBase" : "bg-divBaseNight"} rounded-xl basis-[250px]`}>
      <h3 className="inline-block text-lg">Sunrise & Sunset</h3>
      <div className="flex items-center justify-start space-x-4">
        <GiSunrise className="fill-[#FEAE01] w-8 h-8" />
        <div className="flex flex-col items-center space-x-2">
          <p>{sunrise}</p>
          <p className="text-xs">{sunriseDifference}</p>
        </div>
      </div>
      <div className="flex items-center justify-start space-x-4">
        <GiSunset className="fill-[#FEAE01] w-8 h-8" />
        <div className="flex flex-col items-center space-x-2">
          <p>{sunset}</p>
          <p className="text-xs">{sunsetDifference}</p>
        </div>
      </div>
    </div>
  );
}

export default SunriseSunset;
