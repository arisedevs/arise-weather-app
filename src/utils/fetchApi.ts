import axios from "axios";

export const getLocation = async (city: string) => {
  try {
    const response = await axios.get("http://localhost:8000/api/get-location", {
      params: {
        q: city,
      },
    });

    const data = response.data.items[0];

    return data;
    
  } catch (error) {
    console.error("Error in fetching data: ", error);
  }
};

export const getWeather = async (lat: number, lon:number) => {
    try {
      const response = await axios.get("http://localhost:8000/api/get-weather", {
        params: {
          lat: lat,
          lon: lon,
        },
      });
  
      const data = response.data;
  
      return data;
      
    } catch (error) {
      console.error("Error in fetching data: ", error);
    }
  };

  export const getYesterdayWeather = async (lat: number, lon: number, dt: number) => {
    try {
      const response = await axios.get("http://localhost:8000/api/get-yesterday-weather", {
        params: {
          lat: lat,
          lon: lon,
          dt: dt,
        },
      });
  
      const data = response.data;
  
      return data;
      
    } catch (error) {
      console.error("Error in fetching data: ", error);
    }
  };