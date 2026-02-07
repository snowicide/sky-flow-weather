"use client";

import type { WeatherDetailsProps } from "./WeatherDetails.types";

export default function WeatherDetails({ currentData }: WeatherDetailsProps) {
  const weatherDetails = [
    {
      title: "Feels Like",
      value: `${currentData.apparent_temperature.toFixed(1)}°`,
    },
    {
      title: "Humidity",
      value: `${currentData.relative_humidity_2m}%`,
    },
    {
      title: "Wind",
      value: `${currentData.wind_speed_10m} km/h`,
    },
    {
      title: "Precipitation",
      value: `${currentData.precipitation} mm`,
    },
  ];

  return (
    <section aria-label="Weather Details" className="mb-10">
      <h2 className="sr-only">Weather Details</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {weatherDetails.map(({ title, value }) => (
          <li
            key={title}
            className="bg-[hsl(243,27%,20%)] hover:opacity-75 transition duration-75 p-4 sm:p-5 rounded-xl border border-white/10"
          >
            <p className="text-white/70 text-sm mb-2">{title}</p>
            <p className="text-2xl sm:text-2xl font-semibold">{value}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
