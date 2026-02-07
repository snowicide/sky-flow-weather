"use client";
import { useSearchParams } from "next/navigation";
import { useWeatherQuery } from "@/hooks/useWeatherQuery";
import { SearchField } from "./SearchField";
import { useSearchActions } from "@/hooks/useSearchActions";

export default function SearchSection() {
  const searchParams = useSearchParams();

  const cityFromUrl = searchParams.get("city") || "minsk";
  const { isError } = useWeatherQuery(cityFromUrl);

  const { searchSelectedCity } = useSearchActions();

  return (
    <div className="mb-10">
      <h1 className="text-5xl max-w-80 sm:max-w-full leading-tight justify-self-center sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-15">
        How&apos;s the sky looking today?
      </h1>

      <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
        <div
          className={`flex items-center flex-1 group bg-[hsl(243,27%,20%)] hover:bg-[hsl(243,27%,20%)]/80 focus-within:bg-[hsl(243,27%,20%)]/80 focus-within:ring-2 focus-within:ring-[hsl(233,67%,56%)] transition duration-75 rounded-xl px-4 py-3 ${isError ? "ring-1 ring-red-500/50" : ""}`}
        >
          <SearchField />
        </div>
        <button
          onClick={() => searchSelectedCity()}
          className="bg-[hsl(233,67%,56%)] text-white font-medium py-3 px-6 rounded-xl text-base sm:text-lg whitespace-nowrap hover:opacity-90 transition-opacity"
        >
          Search
        </button>
      </div>
    </div>
  );
}
