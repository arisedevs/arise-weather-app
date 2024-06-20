import { LuSearch } from "react-icons/lu";
import { useState } from "react";
import axios from "axios";
import { useQueryValueContext } from "../context/QueryValueContext";
import { getLocation } from "../utils/fetchApi";
import { useLocationContext } from "../context/LocationContext";
import { getWeather, getYesterdayWeather } from "../utils/fetchApi";
import { useWeatherContext } from "../context/WeatherContext";

type suggestionProps = {
  id: string;
  address: {
    label: string;
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

type LocationData = {
  address: {
    label: string;
  };
  position: {
    lat: number;
    lng: number;
  };
};

function SearchCity() {
  const { setQueryValue } = useQueryValueContext();
  const { setLocation } = useLocationContext();
  const { setWeather } = useWeatherContext();

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<suggestionProps[]>([]);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setQuery(query);
    setQueryValue(query.length);

    if (query.length > 2) {
      try {
        const response = await axios.get<{ items: suggestionProps[] }>(
          "https://arise-weather-api.vercel.app/api/search-location",
          {
            params: { q: query },
          }
        );

        setSuggestions(response.data.items);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  const changeLocationWeather = async (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    const target = e.target as HTMLElement;
    const q = target.dataset.description;

    // Ensure query is defined and valid before further processing
    if (q) {
      // Perform your logic here with query

      const dataLoc = async () => {
        try {
          const dataLoc: LocationData = await getLocation(q);

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
        } catch (error) {
          console.error("Error in fetching data: ", error);
        }
      };

      dataLoc();
      setQuery("");
      setSuggestions([]);
      setQueryValue(0);
    }
  };

  return (
    <>
      <div className="flex flex-row items-center">
        <LuSearch className="w-6 h-6" />
        <input
          type="text"
          placeholder="Search for city..."
          name="searchPlace"
          className="w-full p-3 bg-transparent rounded-xl input placeholder:text-gray-500 focus:outline-none focus:border-transparent placeholder:font-light"
          value={query}
          onChange={onChange}
        />
      </div>

      {suggestions.length > 0 && (
        <ul className="absolute px-8 leading-8 translate-y-12 z-10 overflow-x-auto] w-3/4 lg:w-[320px] text-xs">
          {suggestions.slice(0, 5).map((suggestion) => (
            <li
              className="cursor-pointer"
              key={suggestion.id}
              data-description={suggestion.address.label}
              onClick={changeLocationWeather}
            >
              {suggestion.address.label}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default SearchCity;
