import dayjs from "dayjs";

export function formatDayOfWeek(date: Date) {
  return dayjs(date).format("dddd");
}

export function formatHourOfDay(date: Date) {
  return dayjs(date).format("h A");
}

export function getHourNumber(hour: string): number | undefined {
  if (hour.includes("AM")) {
    return parseInt(hour);
  } else if (hour.includes("PM")) {
    return parseInt(hour) + 12;
  }
}
