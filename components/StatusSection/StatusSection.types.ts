import type { WeatherResponse } from "@/types/api/WeatherResponse";

export interface StatusSectionProps {
  isError: boolean;
  error: Error | null;
  data: WeatherResponse | undefined;
}
