
import useGetUvIndex from "../hooks/useGetUvIndex"
import { useThemeContext } from "../context/ThemeContext"
import { useWeatherContext } from "../context/WeatherContext"


function UvIndex() {
    const { theme } = useThemeContext();
    const { weather } = useWeatherContext();
    const { icon, description } = useGetUvIndex({index: weather.uvIndex})
    

    return (
        <div className={`p-5 px-10 space-y-5 ${theme === "cupcake" ? "bg-divBase" : "bg-divBaseNight"} rounded-xl basis-[250px]`}>
          <h3 className="inline-block text-lg">UV Index</h3>
          <div className="flex items-center justify-between">
            <img src={icon} alt="" className="self-start mr-3" />
            <div className="flex flex-col items-center space-y-2">
              <h1 className="text-2xl font-medium">{weather.uvIndex}</h1>
              <p className="text-xs">{description}</p>
            </div>
          </div>
        </div>
    )
}

export default UvIndex
