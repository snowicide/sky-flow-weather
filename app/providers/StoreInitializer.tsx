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
  const currentData = useWeatherStore((state) => state.weatherData);

  useEffect(() => {
    if (initialData && !currentData) setWeatherData(initialData, city);
  }, [initialData, city, currentData, setWeatherData]);

  return null;
}
