import low from "../assets/icons/uv-low.svg";
import moderate from "../assets/icons/uv-moderate.svg";
import high from "../assets/icons/uv-high.svg";
import veryHigh from "../assets/icons/uv-very-high.svg";
import extreme from "../assets/icons/uv-extreme.svg"
import { useEffect, useState } from "react";

type GetUvIndexProps = {
    index: number | undefined,
}

function useGetUvIndex({ index }: GetUvIndexProps) {


    const [icon, setIcon] = useState<string | undefined>();
    const [description, setDescription] = useState<string | undefined>();

    useEffect(() => {

        if (index === undefined) {
            setIcon(undefined);
            setDescription(undefined);
            return;
        }
        
        if (index <= 2) {
            setIcon(low);
            setDescription("Low");
        } else if (index <= 5) {
            setIcon(moderate);
            setDescription("Moderate");
        } else if (index <= 7) {
            setIcon(high);
            setDescription("High");
        } else if (index <= 10) {
            setIcon(veryHigh);
            setDescription("Very High");
        } else {
            setIcon(extreme);
            setDescription("Extreme")
        }
    }, [index])

    return { icon, description };
}

export default useGetUvIndex
