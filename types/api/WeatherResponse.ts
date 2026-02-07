import {
  WeatherDataCurrent,
  WeatherDataHourly,
  WeatherDataDaily,
} from "@/types/api/WeatherData";

export type WeatherError = {
  code: "GEOCODING_FAILED" | "FORECAST_FAILED" | "UNKNOWN_ERROR";
  message: string;
  details?: unknown;
};
export type WeatherResponse =
  | {
      success: true;
      data: {
        current: WeatherDataCurrent;
        hourly: WeatherDataHourly;
        daily: WeatherDataDaily;
      };
      validatedCity: string;
    }
  | {
      success: false;
      error: WeatherError;
    };
