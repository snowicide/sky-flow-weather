import { Dispatch, SetStateAction } from "react";
import type { DailyForecast } from "./WeatherHourly";

export interface ChangeSelectedDayProps {
  days: DailyForecast[];
  setSelectedDayIndex: Dispatch<SetStateAction<number>>;
}
