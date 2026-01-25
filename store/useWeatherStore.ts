import { create } from "zustand";

interface WeatherState {
  loading: boolean;
  error: string | null;
  weatherData: object | null;
  searchText: string;

  setLoading: (value: boolean) => void;
  setError: (value: string | null) => void;
  setWeatherData: (value: object) => void;
  setSearchText: (value: string) => void;
}

export const useWeatherStore = create<WeatherState>((set) => ({
  loading: false,
  error: null,
  weatherData: null,
  searchText: "",

  setLoading: (value) => set({ loading: value }),

  setError: (value) => set({ error: value }),

  setWeatherData: (value) => set({ weatherData: value }),

  setSearchText: (value) => set({ searchText: value }),
}));
