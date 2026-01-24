import Image from "next/image";

import sunnyIcon from "@/public/icons/icon-sunny.webp";
import partlyCloudyIcon from "@/public/icons/icon-partly-cloudy.webp";
import snowIcon from "@/public/icons/icon-snow.webp";
import fogIcon from "@/public/icons/icon-fog.webp";
import rainIcon from "@/public/icons/icon-rain.webp";
import drizzleIcon from "@/public/icons/icon-drizzle.webp";
import stormIcon from "@/public/icons/icon-storm.webp";

export default function DailyForecast() {
  const weekDailyForecast = [
    {
      day: "Tue",
      image: rainIcon,
      temp: "20°",
      feelsLike: "14°",
    },
    {
      day: "Wed",
      image: drizzleIcon,
      temp: "21°",
      feelsLike: "15°",
    },
    {
      day: "Thu",
      image: sunnyIcon,
      temp: "24°",
      feelsLike: "14°",
    },
    {
      day: "Fri",
      image: partlyCloudyIcon,
      temp: "25°",
      feelsLike: "13°",
    },
    {
      day: "Sat",
      image: stormIcon,
      temp: "21°",
      feelsLike: "15°",
    },
    {
      day: "Sun",
      image: snowIcon,
      temp: "25°",
      feelsLike: "16°",
    },
    {
      day: "Mon",
      image: fogIcon,
      temp: "24°",
      feelsLike: "15°",
    },
  ];

  return (
    <div className="mb-10">
      <h3 className="text-xl sm:text-2xl font-bold mb-5">Daily forecast</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-3">
        {weekDailyForecast.map(({ day, image, temp, feelsLike }) => (
          <div
            key={day}
            className="bg-[hsl(243,27%,20%)] p-4 rounded-xl border border-white/10 flex flex-col items-center"
          >
            <p className="font-medium mb-3">{day}</p>
            <div className="relative w-12 h-12 mb-3">
              <Image
                src={image}
                alt={`${day} weather`}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex justify-between w-full">
              <span className="font-bold">{temp}</span>
              <span className="text-white/70">{feelsLike}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
