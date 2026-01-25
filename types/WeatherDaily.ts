export interface WeatherDaily {
  data: {
    apparent_temperature_max: number[];
    apparent_temperature_min: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    time: string[];
    weather_code: number[];
  };
}
