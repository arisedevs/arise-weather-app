import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import SideBar from "./SideBar";
import Main from "./Main";
import Error from "./Error";
import Loading from "./Loading";
import { useLocationContext } from "../context/LocationContext";
import {
  getLocation,
  getWeather,
  getYesterdayWeather,
} from "../utils/fetchApi";
import { useWeatherContext } from "../context/WeatherContext";
import { useFetchStatusContext } from "../context/FetchStatusContext";


type LocationData = {
  address: {
    label: string;
  };
  position: {
    lat: number;
    lng: number;
  };
};

type WeatherData = {
  timezone: string;
  current: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: Weather[];
  };

  daily: Daily[];
};

type Daily = {
  sunrise: number;
  sunset: number;
};

type Weather = {
  description: string;
  icon: string;
};

type YesterdayWeatherData = {
  data: YesterdaySunriseSunsetData[];
};

type YesterdaySunriseSunsetData = {
  sunrise: number;
  sunset: number;
};

function Page() {
  const { location, setLocation } = useLocationContext();
  const { setWeather } = useWeatherContext();
  const { isFetchSuccess, setIsFetchSuccess } = useFetchStatusContext()
  const [isLoading, setIsLoading] = useState(false);

  

  useEffect(() => {

    const handleError = (error: unknown) => {
      if (axios.isAxiosError(error)) {
        // Handle Axios-specific error
        if (error.response && error.response.status === 429) {
          setIsFetchSuccess(false);
        } else {
          console.error("An error occurred while fetching data.", error);
          setIsFetchSuccess(false);
        }
      } else {
        // Handle generic error
        console.error("An unexpected error occurred.", error);
        setIsFetchSuccess(false);
      }
    };

    const fetchWeatherData = async () => {
      try {
        setIsLoading(true);
        const initialLoc = await axios.get<{ city: string }>(
          "http://ip-api.com/json/"
        );
        const initialCity = initialLoc.data.city;

        const dataLoc: LocationData = await getLocation(initialCity);

        setLocation({
          city: dataLoc.address.label,
          lat: dataLoc.position.lat,
          lon: dataLoc.position.lng,
        });

        const weatherResponse: WeatherData = await getWeather(
          dataLoc.position.lat,
          dataLoc.position.lng
        );

        const currentTime = new Date(weatherResponse.current.dt * 1000);
        currentTime.setUTCDate(currentTime.getUTCDate() - 1);
        const yesterdayDt = Math.floor(currentTime.getTime() / 1000);

        const yesterdayWeatherResponse: YesterdayWeatherData =
          await getYesterdayWeather(
            dataLoc.position.lat,
            dataLoc.position.lng,
            yesterdayDt
          );

        setWeather({
          dt: weatherResponse.current.dt,
          timezone: weatherResponse.timezone,
          temperature: weatherResponse.current.temp,
          weatherDescription: weatherResponse.current.weather[0].description,
          uvIndex: weatherResponse.current.uvi,
          windSpeed: weatherResponse.current.wind_speed,
          windDegrees: weatherResponse.current.wind_deg,
          sunrise: weatherResponse.current.sunrise,
          sunset: weatherResponse.current.sunset,
          yesterdaySunrise: yesterdayWeatherResponse.data[0].sunrise,
          yesterdaySunset: yesterdayWeatherResponse.data[0].sunset,
          humidity: weatherResponse.current.humidity,
          visibility: weatherResponse.current.visibility,
          dewPoint: weatherResponse.current.dew_point,
          icon: weatherResponse.current.weather[0].icon,
        });

        setIsFetchSuccess(true);
      } catch (error) {
        handleError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!location.city) {
      fetchWeatherData();
    } else {
      const fetchWeatherForLocation = async () => {
        try {
          setIsLoading(true);
          const weatherResponse = await getWeather(
            location.lat ?? 0,
            location.lon ?? 0
          );
          const currentTime = new Date(weatherResponse.current.dt * 1000);
          currentTime.setUTCDate(currentTime.getUTCDate() - 1);
          const yesterdayDt = Math.floor(currentTime.getTime() / 1000);
          const yesterdayWeatherResponse = await getYesterdayWeather(
            location.lat ?? 0,
            location.lon ?? 0,
            yesterdayDt
          );

          setWeather({
            dt: weatherResponse.current.dt,
            timezone: weatherResponse.timezone,
            temperature: weatherResponse.current.temp,
            weatherDescription: weatherResponse.current.weather[0].description,
            uvIndex: weatherResponse.current.uvi,
            windSpeed: weatherResponse.current.wind_speed,
            windDegrees: weatherResponse.current.wind_deg,
            sunrise: weatherResponse.current.sunrise,
            sunset: weatherResponse.current.sunset,
            yesterdaySunrise: yesterdayWeatherResponse.data[0].sunrise,
            yesterdaySunset: yesterdayWeatherResponse.data[0].sunset,
            humidity: weatherResponse.current.humidity,
            visibility: weatherResponse.current.visibility,
            dewPoint: weatherResponse.current.dew_point,
            icon: weatherResponse.current.weather[0].icon,
          });

          setIsFetchSuccess(true);
        } catch (error) {
          handleError(error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchWeatherForLocation();
    }
  }, [setLocation, location, setWeather, setIsFetchSuccess]);

  return (
    <>
    <main>
      
    </main>
      {/* If fetch is successful, display page. If not, display a page error */}
      {isFetchSuccess ?
      isLoading ? ( <Loading /> ) :
      (
        <main className="p-5 lg:h-dvh lg:flex max-w-[1300px] mx-auto space-y-5 lg:space-y-0 lg:space-x-16">
          <section className="mb-10 lg:mb-0">
            <Header className="flex lg:hidden" />
            <SideBar />
          </section>

          <section className="flex-1">
            <Header className="hidden lg:flex" />
            <Main />
          </section>
          

        </main>
      ) 
      : 
      isLoading ? ( <Loading /> ) :
      (
        <Error />
        
      )}
    </>
  );
}

export default Page;
