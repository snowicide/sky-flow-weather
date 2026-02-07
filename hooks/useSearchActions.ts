import { useSearchHistory } from "@/hooks/useSearchHistory";
import { useSearchStore } from "@/stores/useSearchStore";
import { useShallow } from "zustand/shallow";
import type { ActiveTab } from "@/components/SearchSection/SearchField.types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useSearchActions() {
  const { setInputValue, setCurrentTab, inputValue, setIsOpen } =
    useSearchStore(
      useShallow((state) => ({
        setInputValue: state.setInputValue,
        setCurrentTab: state.setCurrentTab,
        inputValue: state.inputValue,
        setIsOpen: state.setIsOpen,
      })),
    );

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { addCity } = useSearchHistory();

  const handleChangeTab = (value: ActiveTab) => {
    setCurrentTab(value);
  };

  const searchSelectedCity = async (city?: string) => {
    // if not clicked recent - using input value
    if (!city) city = inputValue.trim();
    if (!city.trim() || city.length <= 1) return;
    setIsOpen(false);
    setInputValue("");
    // get country
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`,
    );

    if (geoRes.ok) {
      const geoData = await geoRes.json();
      if (geoData.results?.[0]) {
        const country = geoData.results[0].country || "Unknown";
        addCity(city, country);
      }
    }

    const params = new URLSearchParams(searchParams.toString());
    params.set("city", city);
    router.push(`${pathname}?${params.toString().toLowerCase()}`);
  };

  return {
    handleChangeTab,
    searchSelectedCity,
  };
}
