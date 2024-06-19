import { ReactNode, useState } from "react"
import { LocationType, LocationContext } from "./LocationContext"

type LocationProviderPropsType = {
    children: ReactNode
}

const initialLocation: LocationType = {
    city: undefined,
    lat: undefined,
    lon: undefined,
}

function LocationContextProvider({ children }: LocationProviderPropsType) {

    const [location, setLocation] = useState<LocationType>(initialLocation)

    return (
        <LocationContext.Provider value={{location, setLocation}}>
            {children}
        </LocationContext.Provider>
    )
}

export default LocationContextProvider
