import type { DailyForecast } from "./WeatherHourly";

export interface ChangeSelectedDayProps {
  days: DailyForecast[];
  setSelectedDayIndex: (index: number) => void;
}
