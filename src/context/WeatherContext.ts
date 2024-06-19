import { createContext, useContext, Dispatch, SetStateAction } from "react";

export type WeatherType = {
  dt: number | undefined,
  timezone: string | undefined,
  temperature: number | undefined,
  weatherDescription: string | undefined,
  uvIndex: number | undefined,
  windSpeed: number | undefined,
  windDegrees: number | undefined,
  sunrise: number | undefined,
  sunset: number | undefined,
  yesterdaySunrise: number | undefined,
  yesterdaySunset: number | undefined,
  humidity: number | undefined,
  visibility: number | undefined,
  dewPoint: number | undefined,
  icon: string | undefined
};

type WeatherContextType = {
  weather: WeatherType;
  setWeather: Dispatch<SetStateAction<WeatherType>>;
};

export const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const useWeatherContext = () => {
    const city = useContext(WeatherContext);

    if (city === undefined) {
        throw new Error('useWeatherContext must be used with a WeatherContextProvider');
      }
    
    return city;
}