import { useThemeContext } from "../context/ThemeContext"
import { useTempScaleContext } from "../context/TempScaleContext";

type ForecastProps = {
  day: string,
  date: string,
  icon: string,
  temp: number,
}

function Forecast({ day, date, icon, temp }: ForecastProps) {
  
    const { theme } = useThemeContext();
    const { tempScale } = useTempScaleContext();

    return (
        <div className={`flex flex-col items-center justify-center py-4 rounded-xl ${theme === "cupcake"? "bg-divBase" : "bg-divBaseNight"} basis-[145px]`}>
          <h3 className="text-sm">{day}</h3>
          <p className="mb-2 text-xs">{date}</p>
          <img src={`/icons/${icon}.svg`} alt="weather-icon" className="w-1/3" />
          <div className="flex">
            <h1 className="text-lg">{tempScale === "metric" ? Math.round(temp) : Math.round((temp * 9/5) + 32)}</h1>
            { tempScale === "metric" ?
             <h1 className="text-xs">&deg;C</h1>
             :
             <h1 className="text-xs">&deg;F</h1>
            }
            
          </div>
        </div>
    )
}

export default Forecast
