import { ReactNode, useState } from "react"
import { QueryValueContext } from "./QueryValueContext";

type QueryValueContextProviderProps = {
    children: ReactNode
}

function QueryValueContextProvider({children}: QueryValueContextProviderProps) {

    const [queryValue, setQueryValue] = useState<number>(0);

    return (
        <QueryValueContext.Provider value={{queryValue, setQueryValue}}>
            {children}
        </QueryValueContext.Provider>
    )
}

export default QueryValueContextProvider
