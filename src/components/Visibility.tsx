import useGetVisibility from "../hooks/useGetVisibility";
import { useThemeContext } from "../context/ThemeContext";
import { useWeatherContext } from "../context/WeatherContext";

function Visibility() {

  const { theme } = useThemeContext();
  const { weather } = useWeatherContext()
  const { visibilityValue, scale } = useGetVisibility({ visibility: weather.visibility});
  

    return (
      <div className={`p-5 px-10 space-y-4 ${theme === "cupcake"? "bg-divBase" : "bg-divBaseNight"} rounded-xl basis-[250px]`}>
        <h3 className="inline-block text-lg">Visibility</h3>
          <div className="flex items-end gap-3">
            <h1 className="text-5xl font-medium">{visibilityValue}</h1>
            <p className="text-lg">km</p>
          </div>
        <hr className='border border-secondary'/>
        <p>{scale}</p>
      </div>
    );
}

export default Visibility
