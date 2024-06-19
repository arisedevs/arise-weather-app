import { createContext, Dispatch, SetStateAction, useContext } from "react";

type TempScaleContextType = {
    tempScale: "metric" | "imperial",
    setTempScale: Dispatch<SetStateAction<"metric" | "imperial">>
}

export const TempScaleContext = createContext<TempScaleContextType | undefined>(undefined);

export const useTempScaleContext = () => {
    const theme = useContext(TempScaleContext);

    if (theme === undefined) {
        throw new Error('useTempScaleContext must be used with a TempScaleContextProvider');
      }
    
    return theme;
}