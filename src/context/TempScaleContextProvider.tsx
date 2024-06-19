import { ReactNode, useState } from 'react'
import { TempScaleContext } from './TempScaleContext';

type TempScaleContextProviderPropsType = {
    children: ReactNode
}

function TempScaleContextProvider({ children }: TempScaleContextProviderPropsType) {

    const [tempScale, setTempScale] = useState<"metric" | "imperial">("metric")

    return (
        <TempScaleContext.Provider value={{tempScale, setTempScale}}>
            {children}
        </TempScaleContext.Provider>
    )
}

export default TempScaleContextProvider
