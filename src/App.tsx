import ThemeContextProvider from "./context/ThemeContextProvider";
import LocationContextProvider from "./context/LocationContextProvider";
import WeatherContextProvider from "./context/WeatherContextProvider";
import TempScaleContextProvider from "./context/TempScaleContextProvider";
import QueryValueContextProvider from "./context/QueryValueContextProvider";
import FetchStatusContextProvider from "./context/FetchStatusContextProvider";
import Page from "./components/Page";

function App() {

  return (
    <ThemeContextProvider>
      <TempScaleContextProvider>
        <LocationContextProvider>
          <WeatherContextProvider>
            <QueryValueContextProvider>
            <FetchStatusContextProvider>
            <Page />
            </FetchStatusContextProvider>
            </QueryValueContextProvider>
          </WeatherContextProvider>
        </LocationContextProvider>
      </TempScaleContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
