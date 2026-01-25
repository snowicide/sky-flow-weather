export interface WeatherCurrent {
  data: {
    apparent_temperature: number;
    city: string;
    country: string;
    interval: number;
    precipitation: number;
    relative_humidity_2m: number;
    temperature_2m: number;
    time: string;
    weather_code: number;
    wind_speed_10m: number;
  };
}
