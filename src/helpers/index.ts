import { DecodedToken } from "../../types";
import { jwtDecode } from "jwt-decode";

export const decodeToken = (token: string) => {
    try {
        const decodeToken: DecodedToken = jwtDecode(token);
        return decodeToken.role;
    } catch (error) {
        return null;
    }
};

function isDate(value: string | number | Date): value is Date {
    return value instanceof Date;
}

export const formatDate = (date: string | number | Date): string => {
    if (isDate(date)) {
        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        return date.toLocaleDateString(undefined, options);
    } else if (typeof date === "string") {
        const parsedDate = new Date(date);

        if (!isNaN(parsedDate.getTime())) {
            const options: Intl.DateTimeFormatOptions = {
                year: "numeric",
                month: "long",
                day: "numeric",
            };
            return parsedDate.toLocaleDateString(undefined, options);
        }
    }

    return "";
};

export function formatTimestamp(timestamp: string): string {
    const date = new Date(timestamp);
    const now = new Date();

    // Calculate the time difference in milliseconds
    const timeDiff = now.getTime() - date.getTime();
    const secondsDiff = Math.floor(timeDiff / 1000);
    const minutesDiff = Math.floor(secondsDiff / 60);
    const hoursDiff = Math.floor(minutesDiff / 60);
    const daysDiff = Math.floor(hoursDiff / 24);

    // If the timestamp is within the last 24 hours
    if (daysDiff === 0 && now.getDate() === date.getDate()) {
        if (hoursDiff === 0) {
            return `${minutesDiff} minutes ago`;
        } else {
            return `${hoursDiff} hours ago`;
        }
    }
    // If the timestamp is yesterday
    else if (daysDiff === 1) {
        const options: Intl.DateTimeFormatOptions = {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        };
        return "Yesterday " + date.toLocaleTimeString("en-US", options);
    }
    // If the timestamp is within the last week
    else if (daysDiff < 7) {
        const days: string[] = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        const day: string = days[date.getDay()];
        const options: Intl.DateTimeFormatOptions = {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        };
        return `${day} ${date.toLocaleTimeString("en-US", options)}`;
    }
    // If the timestamp is more than a week ago
    else {
        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        };
        return date.toLocaleDateString("en-US", options);
    }
}
