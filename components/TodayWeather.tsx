import Image from "next/image";
import bgTodayMobile from "@/public/images/bg-today-small.svg";
import bgTodayDesktop from "@/public/images/bg-today-large.svg";

import sunnyIcon from "@/public/icons/icon-sunny.webp";

export default function TodayWeather() {
  return (
    <div className="relative rounded-2xl py-8 overflow-hidden mb-8">
      <div className="absolute inset-0">
        <Image
          src={bgTodayMobile}
          alt="Today background"
          className="w-full h-full object-contain scale-1000 md:hidden"
          fill
          priority
        />
        <Image
          src={bgTodayDesktop}
          alt="Today background"
          className="w-full h-full object-contain scale-1000 hidden md:block"
          fill
        />
      </div>

      <div className="relative p-6 sm:p-8 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              Berlin, Germany
            </h2>
            <p className="text-white/70 text-lg sm:text-xl">
              Tuesday, Aug 5, 2025
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20 sm:w-35 sm:h-35">
              <Image
                src={sunnyIcon}
                alt="Sunny"
                fill
                className="object-contain"
              />
            </div>
            <div className="font-bold flex gap-3">
              <span className="text-5xl sm:text-6xl md:text-8xl italic">
                20
              </span>
              <span className="text-4xl sm:text-6xl">°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
