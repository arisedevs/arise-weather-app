import axios from "axios";
import { useEffect, useState } from "react";

function useGetInitialLocation() {

    const [initialCity, setInitialCity] = useState("")

    useEffect(() => {
 
        const getInitialLocation = async () => {
            try {
                const initialLoc = await axios.get("http://ip-api.com/json/");
                const initialCity = initialLoc.data.city;

                setInitialCity(initialCity)

            } catch(error) {
                console.error("Error in fetching data: ", error);
            }
        }

        getInitialLocation();

    }, [])

    return { initialCity }
}

export default useGetInitialLocation;
