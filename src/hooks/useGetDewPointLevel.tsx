import { useEffect, useState } from "react";
import { useTempScaleContext } from "../context/TempScaleContext";

type GetDewPointPropsType = {
  dewPoint: number | undefined;
};

function useGetDewPointLevel({ dewPoint }: GetDewPointPropsType) {
  const { tempScale } = useTempScaleContext();
  const [comfortLevel, setComfortLevel] = useState<string | undefined>();
  const [dewPointValue, setDewPointValue] = useState<number | undefined>();

  // On first load, check what tempscale will be use (metric in default) then pass the dew point value to function that determine comfort level. Returns a dew point value and comfort level.

  useEffect(() => {
    if (tempScale === "metric") {
      dewPointCelsius(dewPoint);
    } else if (tempScale === "imperial") {
      dewPointFahrenheit(dewPoint);
    }
  }, [dewPoint, tempScale]);

  const dewPointCelsius = (dewPoint: number | undefined) => {
    if (dewPoint === undefined) {
      setComfortLevel(undefined);
      setDewPointValue(undefined);
      return;
    }

    if (dewPoint <= 55) {
      setDewPointValue(dewPoint);
      setComfortLevel("Dry and Comfortable");
    } else if (dewPoint <= 60) {
      setDewPointValue(dewPoint);
      setComfortLevel("Comfortable");
    } else if (dewPoint <= 65) {
      setDewPointValue(dewPoint);
      setComfortLevel("Sticky or Humid");
    } else if (dewPoint <= 70) {
      setDewPointValue(dewPoint);
      setComfortLevel("Uncomfortable");
    } else if (dewPoint <= 75) {
      setDewPointValue(dewPoint);
      setComfortLevel("Very Humid and Oppressive");
    } else {
      setDewPointValue(dewPoint);
      setComfortLevel("Extremely oppressive");
    }
  };

  const dewPointFahrenheit = (dewPoint: number | undefined) => {
    if (dewPoint === undefined) {
      setComfortLevel(undefined);
      return;
    }

    if (dewPoint <= 13) {
      setDewPointValue(Math.round(((dewPoint * 9) / 5 + 32) * 100) / 100);
      setComfortLevel("Dry and Comfortable");
    } else if (dewPoint <= 16) {
      setDewPointValue(Math.round(((dewPoint * 9) / 5 + 32) * 100) / 100);
      setComfortLevel("Comfortable");
    } else if (dewPoint <= 18) {
      setDewPointValue(Math.round(((dewPoint * 9) / 5 + 32) * 100) / 100);
      setComfortLevel("Sticky or Humid");
    } else if (dewPoint <= 21) {
      setDewPointValue(Math.round(((dewPoint * 9) / 5 + 32) * 100) / 100);
      setComfortLevel("Uncomfortable");
    } else if (dewPoint <= 24) {
      setDewPointValue(Math.round(((dewPoint * 9) / 5 + 32) * 100) / 100);
      setComfortLevel("Very Humid and Oppressive");
    } else {
      setDewPointValue(Math.round(((dewPoint * 9) / 5 + 32) * 100) / 100);
      setComfortLevel("Extremely oppressive");
    }
  };

  return { dewPointValue, comfortLevel };
}

export default useGetDewPointLevel;
