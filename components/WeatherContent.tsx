"use client";
import { useWeatherQuery } from "@/hooks/useWeatherQuery";
import { DailyForecast } from "./DailyForecast";
import { TodayWeather } from "./TodayWeather";
import { WeatherDetails } from "./WeatherDetails";
import { HourlyForecast } from "./HourlyForecast";
import Image from "next/image";
import retryIcon from "@/public/icons/icon-retry.svg";
import WeatherContentSkeleton from "./WeatherSkeleton/WeatherContent.skeleton";

export default function WeatherContent({
  params,
}: {
  params: { city?: string };
}) {
  const { data, isPending, isError, error } = useWeatherQuery(
    params.city || "",
  );

  if (isPending) return <WeatherContentSkeleton />;
  const isSuccessCity = data?.success;

  const getErrorMessage = () => {
    if (isError) {
      if (error?.message === "FORECAST_FAILED")
        return "Server is temporarily unavailable...";
      if (error?.message === "UNKNOWN-ERROR")
        return "Check your network connection.";
      return "Unexpected error.";
    }
    if (!isSuccessCity) return data?.error.message || "City not found...";
  };

  return (
    <>
      {isError || !isSuccessCity ? (
        <section className="flex flex-col items-center gap-10">
          <h2 className="text-3xl font-bold">{getErrorMessage()}</h2>
          <button className="flex items-center gap-2 px-4 py-3 bg-[hsl(243,27%,20%)] hover:bg-[hsl(243,23%,24%)] transition rounded-lg">
            <Image src={retryIcon} alt="Retry" />
            <span>Go back</span>
          </button>
        </section>
      ) : (
        <>
          <div className="flex flex-col items-center lg:items-start justify-center lg:flex-row gap-8">
            <div className="flex-1 w-full xl:max-w-200">
              <TodayWeather />
              <WeatherDetails />
              <DailyForecast />
            </div>
            <HourlyForecast />
          </div>
        </>
      )}
    </>
  );
}
