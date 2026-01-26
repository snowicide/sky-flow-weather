"use client";
import { useEffect } from "react";
import { useWeatherStore } from "@/store/useWeatherStore";
import { WeatherData } from "@/types/WeatherData";

export default function StoreInitializer({
  initialData,
  city = "Minsk",
}: {
  initialData: WeatherData | null;
  city?: string;
}) {
  const setWeatherData = useWeatherStore((state) => state.setWeatherData);
  const weatherData = useWeatherStore((state) => state.weatherData);

  useEffect(() => {
    if (!weatherData && initialData) {
      setWeatherData(initialData, city);
    }
  }, [city, initialData, setWeatherData, weatherData]);
  return null;
}
