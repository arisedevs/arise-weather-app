import { useEffect, useState } from 'react'

type GetVisibilityProps = {
    visibility: number | undefined,
}

function useGetVisibility( { visibility }: GetVisibilityProps) {

    const [visibilityValue, setVisibilityValue] = useState<number | undefined>();
    const [scale ,setScale] = useState<string | undefined>();

    useEffect(() => {

        if (visibility === undefined) {
            setVisibilityValue(undefined);
            setScale(undefined);
            return;
        }
        
        const km = Math.round((visibility / 1000) * 100) / 100;

        if (visibility <= 100) {
            setVisibilityValue(km);
            setScale("Dense Fog");
        } else if (visibility <= 500) {
            setVisibilityValue(km);
            setScale("Thick Fog");
        } else if (visibility <= 1000) {
            setVisibilityValue(km);
            setScale("Fog");
        } else if (visibility <= 2000) {
            setVisibilityValue(km);
            setScale("Moderate Fog");
        } else if (visibility <= 4000) {
            setVisibilityValue(km);
            setScale("Mist");
        } else if (visibility <= 10000) {
            setVisibilityValue(km);
            setScale("Haze");
        } else if (visibility <= 20000) {
            setVisibilityValue(km);
            setScale("Clear");
        } else {
            setVisibilityValue(km);
            setScale("Excellent");
        }

    }, [visibility] )

    return { visibilityValue, scale }
}

export default useGetVisibility;

// Weather Visibility Scale
// 0 - 100 meters: Dense Fog

// Description: Extremely limited visibility. Driving and outdoor activities are very dangerous.
// 100 - 500 meters: Thick Fog

// Description: Very limited visibility. Caution is needed when driving or walking.
// 500 - 1000 meters: Fog

// Description: Reduced visibility. Objects appear hazy and blurred.
// 1 - 2 kilometers: Moderate Fog

// Description: Reduced visibility but manageable. Driving should be done with caution.
// 2 - 4 kilometers: Light Fog / Mist

// Description: Slight reduction in visibility. Noticeable but generally safe.
// 4 - 10 kilometers: Haze

// Description: Minor reduction in visibility. Can be caused by dust, smoke, or light pollution.
// 10 - 20 kilometers: Clear

// Description: Good visibility. Most objects are clearly visible.
// 20+ kilometers: Excellent

// Description: Very clear visibility. Ideal conditions for outdoor activities and travel.