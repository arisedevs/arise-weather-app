import { ReactNode, useState } from "react"
import { WeatherType, WeatherContext } from "./WeatherContext"


type WeatherProviderPropsType = {
    children: ReactNode
}

const initialWeather: WeatherType = {
  dt: undefined,
  timezone: undefined,
  temperature: undefined,
  weatherDescription: undefined,
  uvIndex: undefined,
  windSpeed: undefined,
  windDegrees: undefined,
  sunrise: undefined,
  sunset: undefined,
  yesterdaySunrise: undefined,
  yesterdaySunset: undefined,
  humidity: undefined,
  visibility: undefined,
  dewPoint: undefined,
  icon: undefined
};

function WeatherContextProvider({ children }: WeatherProviderPropsType) {

    const [weather, setWeather] = useState<WeatherType>(initialWeather)

    return (
        <WeatherContext.Provider value={{weather, setWeather}}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContextProvider;
