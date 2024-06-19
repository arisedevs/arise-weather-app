import { useThemeContext } from "../context/ThemeContext";
import { useWeatherContext } from "../context/WeatherContext";
import { useTempScaleContext } from "../context/TempScaleContext";
import useGetDewPointLevel from "../hooks/useGetDewPointLevel";

function DewPoint() {

    const { theme } = useThemeContext();
    const { weather } = useWeatherContext();
    const { tempScale } = useTempScaleContext();
    const { dewPointValue, comfortLevel } = useGetDewPointLevel({dewPoint: weather.dewPoint});

    return (
      <div
        className={`p-5 px-10 space-y-4 ${
          theme === "cupcake" ? "bg-divBase" : "bg-divBaseNight"
        } rounded-xl basis-[250px]`}
      >
        <h3 className="inline-block text-lg">Dew Point</h3>
        <div className="flex self-center mb-4 md:mb-9 lg:mb-0">
          <h1 className="text-5xl font-medium">{dewPointValue}</h1>
          {tempScale === "metric" ? (<h1 className="text-xl font-medium">&deg;C</h1>) : (<h1 className="text-xl font-medium">&deg;F</h1>)}
          
        </div>
          <p className="text-sm">{comfortLevel}</p>
      </div>
    );
}

export default DewPoint
