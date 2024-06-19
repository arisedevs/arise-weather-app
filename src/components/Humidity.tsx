import useGetHumidityScale from '../hooks/useGetHumidityScale';
import { useThemeContext } from '../context/ThemeContext';
import { useWeatherContext } from '../context/WeatherContext';

function Humidity() {

    const { theme } = useThemeContext();
    const { weather } = useWeatherContext();
    const { scale } = useGetHumidityScale({ humidity: weather.humidity})

    return (
      <div className={`p-5 px-10 space-y-5 ${theme === "cupcake"? "bg-divBase" : "bg-divBaseNight"} rounded-xl basis-[250px]`}>
        <h3 className="inline-block text-lg">Humidity</h3>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl">{weather.humidity}<span>%</span></h1>
          <div className="divider divider-horizontal"></div>
          <p className="text-xs">{scale}</p>
        </div>
        <div>
          <input
            type="range"
            min={0}
            max="100"
            value={weather.humidity ?? 0}
            className="cursor-default range range-xs range-accent"
            disabled
          />
          <div className="flex justify-between w-full px-1 text-xs">
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
          </div>
        </div>
      </div>
    );
}

export default Humidity;
