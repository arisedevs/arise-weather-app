import { useEffect } from 'react'

type useThemeProps = {
    theme: string
}

function useTheme({ theme }: useThemeProps) {

    useEffect(() => {
        document.querySelector("html")?.setAttribute("data-theme", theme);
    }, [theme]);

}

export default useTheme;
