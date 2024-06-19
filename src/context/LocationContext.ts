import { createContext,useContext, Dispatch, SetStateAction } from "react";

export type LocationType = {
  city: string | undefined;
  lat: number | undefined;
  lon: number | undefined;
};

type LocationContextType = {
  location: LocationType;
  setLocation: Dispatch<SetStateAction<LocationType>>;
};

export const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const useLocationContext = () => {
    const city = useContext(LocationContext);

    if (city === undefined) {
        throw new Error('useLocationContext must be used with a LocationContextProvider');
      }
    
    return city;
}