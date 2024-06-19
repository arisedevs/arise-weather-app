
export const calculateTimeDifference = (today: number | undefined, yesterday: number | undefined) => {

    if (today === undefined || yesterday === undefined) {
        return "";
    }
    
  const diffInSeconds = today - yesterday;
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const remainingSeconds = diffInSeconds % 60;

  const sign = diffInSeconds >= 0 ? "+" : "-";
  const absMinutes = Math.abs(diffInMinutes);
  const absSeconds = Math.abs(remainingSeconds);

  return `${sign}${absMinutes}m ${absSeconds}s`;
};

export const formatToTimeZone = (utcTime: number | undefined, timeZone: string | undefined) => {
    if (utcTime === undefined) {
        return "";
    }
    const date = new Date(utcTime * 1000);
    return new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone
    }).format(date);
};

export const formatToHour24 = (utcTime: number | undefined, timeZone: string | undefined) => {
    if (utcTime === undefined) {
        return "";
    }
    const date = new Date(utcTime * 1000);
    return new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone
    }).format(date);
};

export const formatToDay = (utcTime: number | undefined, timeZone: string | undefined) => {
    if (utcTime === undefined) {
        return "";
    }
    const date = new Date(utcTime * 1000);
    return new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        timeZone
    }).format(date);
};

export const formatToDate = (utcTime: number | undefined, timeZone: string | undefined) => {
    if (utcTime === undefined) {
        return "";
    }
    const date = new Date(utcTime * 1000);
    return new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        timeZone
    }).format(date);
};