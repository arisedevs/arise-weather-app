import { ReactNode, useState } from 'react'
import { FetchStatusContext } from './FetchStatusContext'

type TempScaleContextProviderPropsType = {
    children: ReactNode
}

function FetchStatusContextProvider({ children }: TempScaleContextProviderPropsType) {

    const [isFetchSuccess, setIsFetchSuccess] = useState<boolean>()

    return (
        <FetchStatusContext.Provider value={{isFetchSuccess, setIsFetchSuccess}}>
            {children}
        </FetchStatusContext.Provider>
    )
}

export default FetchStatusContextProvider
