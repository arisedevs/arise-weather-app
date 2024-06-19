import { createContext, useContext, Dispatch, SetStateAction } from "react";


type QueryValueContextType = {
    queryValue: number,
    setQueryValue: Dispatch<SetStateAction<number>>
}
export const QueryValueContext = createContext<QueryValueContextType | undefined>(undefined);

export const useQueryValueContext = () => {
    const query = useContext(QueryValueContext);

    if (query === undefined) {
        throw new Error("useQueryValueContext must be used within a QueryValueProvider");
    }

    return query;
}