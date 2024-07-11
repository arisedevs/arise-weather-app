import WindStatus from "./WindStatus";
import SunriseSunset from "./SunriseSunset";
import Humidity from "./Humidity";
import Visibility from "./Visibility";
import DewPoint from "./DewPoint";
import Forecast from "./Forecast";
import Footer from "./Footer";
import UvIndex from "./UvIndex";
import { useEffect, useState } from "react";
import { useLocationContext } from "../context/LocationContext";
import { useFetchStatusContext } from "../context/FetchStatusContext";
import { getWeather } from "../utils/fetchApi";
import { formatToDate, formatToDay } from "../utils/timeUtils";

type WeatherData = {
  timezone: string,
  daily: Daily[]
}

type Daily = {
  dt: number,
  temp: {
    day: number,
  }
  weather: Weather[],
}

type Weather = {
  icon: string
}

function Main() {

  const { location } = useLocationContext();
  const { setIsFetchSuccess } = useFetchStatusContext();
  const [weatherData, setWeatherData] = useState<WeatherData>();

  useEffect(() => {
    
    const getForecaseWeather = async () => {
      try {
        const response: WeatherData = await getWeather(location.lat ?? 0, location.lon ?? 0);

        setWeatherData({
          timezone: response.timezone,
          daily: response.daily
        });

      } catch (error) {
        console.error("Error in fetching data: ", error);
        setIsFetchSuccess(false);
      }
    }
    getForecaseWeather();
  }, [location.lat, location.lon, setIsFetchSuccess])

  return (
    <>
      <h1 className="mb-4 text-xl font-medium text-center lg:text-start">
        Weather Details
      </h1>

      <div className="flex flex-wrap justify-center gap-5 mb-10 lg:justify-start">
        
        <UvIndex />

        <WindStatus />

        <SunriseSunset />

        <Humidity />

        <Visibility />

        <DewPoint />
        
      </div>

      <h1 className="mb-4 text-xl font-medium text-center lg:text-start">
        Weekly Forecast
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-5 lg:justify-start">

        {weatherData?.daily.slice(1,6).map((weather, index) => (
          <Forecast key={index} day={formatToDay(weather.dt, weatherData.timezone)} icon={weather.weather[0].icon} date={formatToDate(weather.dt, weatherData.timezone)} temp={weather.temp.day} />
        ))}
        
      </div>

    </>
  );
}

export default Main;
