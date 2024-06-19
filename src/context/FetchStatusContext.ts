import { createContext, Dispatch, SetStateAction, useContext } from "react";

type ThemeContextType = {
    isFetchSuccess: boolean | undefined,
    setIsFetchSuccess: Dispatch<SetStateAction<boolean | undefined>>
}

export const FetchStatusContext = createContext<ThemeContextType | undefined>(undefined);

export const useFetchStatusContext = () => {
    const theme = useContext(FetchStatusContext);

    if (theme === undefined) {
        throw new Error('useFetchStatusContext must be used with a FetchContextProvider');
      }
    
    return theme;
}