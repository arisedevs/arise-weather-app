import { ReactNode, useState } from 'react'
import { ThemeContext } from './ThemeContext';

type ThemeContextProviderPropsType = {
    children: ReactNode
}

function ThemeContextProvider({ children }: ThemeContextProviderPropsType) {

    const [theme, setTheme] = useState<"cupcake" | "night">(() => {
        const savedTheme = localStorage.getItem("theme");
        return (savedTheme as "cupcake" | "night") || "cupcake";
      });

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
