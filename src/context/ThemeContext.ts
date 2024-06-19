import { createContext, Dispatch, SetStateAction, useContext } from "react";

type ThemeContextType = {
    theme: "cupcake" | "night",
    setTheme: Dispatch<SetStateAction<"cupcake" | "night">>
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
    const theme = useContext(ThemeContext);

    if (theme === undefined) {
        throw new Error('useThemeContext must be used with a ThemeContextProvider');
      }
    
    return theme;
}