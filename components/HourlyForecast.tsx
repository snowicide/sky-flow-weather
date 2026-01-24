import Image from "next/image";
import dropdownIcon from "@/public/icons/icon-dropdown.svg";

import sunnyIcon from "@/public/icons/icon-sunny.webp";
import partlyCloudyIcon from "@/public/icons/icon-partly-cloudy.webp";
import snowIcon from "@/public/icons/icon-snow.webp";
import fogIcon from "@/public/icons/icon-fog.webp";
import overcastIcon from "@/public/icons/icon-overcast.webp";

export default function HourlyForecast() {
  const hourlyForecast = [
    {
      image: overcastIcon,
      hour: "3 PM",
      temp: "20°",
    },
    {
      image: partlyCloudyIcon,
      hour: "4 PM",
      temp: "20°",
    },
    {
      image: sunnyIcon,
      hour: "5 PM",
      temp: "20°",
    },
    {
      image: overcastIcon,
      hour: "6 PM",
      temp: "19°",
    },
    {
      image: snowIcon,
      hour: "7 PM",
      temp: "18°",
    },
    {
      image: fogIcon,
      hour: "8 PM",
      temp: "18°",
    },
    {
      image: snowIcon,
      hour: "9 PM",
      temp: "17°",
    },
    {
      image: overcastIcon,
      hour: "10 PM",
      temp: "17°",
    },
  ];

  return (
    <div className="lg:w-96">
      <div className="bg-[hsl(243,27%,20%)] p-5 sm:p-6 rounded-2xl border border-white/10 sticky top-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Hourly forecast</h3>
          <button className="flex items-center gap-2 bg-[hsl(243,23%,30%)] px-4 py-2 rounded-lg border border-white/10 hover:opacity-70 transition-opacity">
            <span>Tuesday</span>
            <Image src={dropdownIcon} alt="Dropdown" className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3">
          {hourlyForecast.map(({ image, hour, temp }) => (
            <div
              key={hour}
              className="flex items-center justify-between bg-[hsl(243,23%,24%)] hover:opacity-75 transition duration-75 p-3 rounded-lg border border-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8">
                  <Image
                    src={image}
                    alt={`${hour} weather`}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-medium">{hour}</span>
              </div>
              <span className="text-xl font-bold">{temp}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
