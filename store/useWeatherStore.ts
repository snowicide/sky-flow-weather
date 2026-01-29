import { create } from "zustand";
import { WeatherData } from "@/types/WeatherData";
import { createJSONStorage, persist } from "zustand/middleware";

interface WeatherState {
  isLoading: boolean;
  error: string | null;
  weatherData: WeatherData | null;
  searchText: string;
  lastCity: string;
  lastSuccessfulCity: string;

  setWeatherData: (data: WeatherData, city?: string) => void;
  setSearchText: (value: string) => void;
  setLoading: (value: boolean) => void;
  setError: (value: string | null) => void;
  setLastSuccessfulCity: (city: string) => void;
}

export const useWeatherStore = create<WeatherState>()(
  persist(
    (set) => ({
      weatherData: null,
      lastCity: "Minsk",
      searchText: "",
      isLoading: false,
      error: null,
      lastSuccessfulCity: "Minsk",

      setLoading: (value) => set({ isLoading: value }),
      setError: (value) => set({ error: value }),
      setWeatherData: (data, city) =>
        set({
          weatherData: data,
          lastCity: city || "Minsk",
        }),

      setSearchText: (value) => set({ searchText: value }),
      setLastSuccessfulCity: (city) => set({ lastSuccessfulCity: city }),
    }),
    {
      name: "weather-store",
      storage: createJSONStorage(() => {
        if (typeof window !== "undefined") return localStorage;
        return { getItem: () => null, setItem: () => {}, removeItem: () => {} };
      }),
      partialize: (state) => ({
        weatherData: state.weatherData,
        lastCity: state.lastCity,
        lastSuccessfulCity: state.lastSuccessfulCity,
      }),
    },
  ),
);
