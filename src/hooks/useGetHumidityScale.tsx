import { useEffect, useState } from 'react'

type GetHumidity = {
    humidity: number | undefined,
}

function useGetHumidityScale({ humidity }: GetHumidity) {

    const [scale ,setScale] = useState<string | undefined>();

    useEffect(() => {

        if (humidity === undefined) {
            setScale(undefined);
            return;
        }

        if (humidity <= 20) {
            setScale("Very Low");
        } else if (humidity <= 40) {
            setScale("Low");
        } else if (humidity <= 60) {
            setScale("Comfortable");
        } else if (humidity <= 80) {
            setScale("High");
        } else {
            setScale("Very High");
        }
        
    }, [humidity])

    return { scale };
}

export default useGetHumidityScale;

// Humidity Levels and Their Names
// 0% - 20%: Very Low

// Description: Air is very dry. This level of humidity is often found in desert regions and can lead to dry skin, irritated eyes, and respiratory issues.
// 20% - 40%: Low

// Description: Air is dry. This is common in colder climates during the winter months when indoor heating systems are used.
// 40% - 60%: Comfortable

// Description: This is the ideal range for most people, providing a balance that feels comfortable and reduces the risk of respiratory discomfort and static electricity.
// 60% - 80%: High

// Description: Air feels humid. This can be uncomfortable and may lead to issues like mold growth and mildew in homes, as well as frizzy hair and sweating.
// 80% - 100%: Very High

// Description: Air is very humid. This level of humidity is often found in tropical climates and can make it feel much hotter than it actually is due to the reduced efficiency of sweating to cool the body.