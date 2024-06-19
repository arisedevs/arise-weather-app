import { useEffect, useState } from 'react'
import { formatToTimeZone, calculateTimeDifference } from '../utils/timeUtils';

type GetSunriseSunsetProps = {
    sunriseTimestamp: number | undefined,
    sunsetTimestamp: number | undefined,
    yesterdaySunriseTimestamp: number | undefined,
    yesterdaySunsetTimestamp: number | undefined,
    timezone: string | undefined
}

function useGetSunriseSunset({ sunriseTimestamp, sunsetTimestamp, yesterdaySunriseTimestamp, yesterdaySunsetTimestamp, timezone}: GetSunriseSunsetProps) {

    const [sunrise, setSunrise] = useState<string | undefined>();
    const [sunset, setSunset] = useState<string | undefined>();
    const [sunriseDifference, setSunriseDifference] = useState<string | undefined>()
    const [sunsetDifference, setSunsetDifference] = useState<string | undefined>();

    useEffect(() => {

        setSunrise(formatToTimeZone(sunriseTimestamp, timezone));
        setSunset(formatToTimeZone(sunsetTimestamp, timezone));
        setSunriseDifference(calculateTimeDifference(sunriseTimestamp, yesterdaySunriseTimestamp));
        setSunsetDifference(calculateTimeDifference(sunsetTimestamp, yesterdaySunsetTimestamp));

    },[sunriseTimestamp, sunsetTimestamp, yesterdaySunriseTimestamp, yesterdaySunsetTimestamp, timezone])

    
    return { sunrise, sunset, sunriseDifference, sunsetDifference }
}

export default useGetSunriseSunset;