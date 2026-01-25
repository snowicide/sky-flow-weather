import sunnyIcon from "@/public/icons/icon-sunny.webp";
import partlyCloudyIcon from "@/public/icons/icon-partly-cloudy.webp";
import snowIcon from "@/public/icons/icon-snow.webp";
import fogIcon from "@/public/icons/icon-fog.webp";
import rainIcon from "@/public/icons/icon-rain.webp";
import drizzleIcon from "@/public/icons/icon-drizzle.webp";
import stormIcon from "@/public/icons/icon-storm.webp";
import overcastIcon from "@/public/icons/icon-overcast.webp";
import { StaticImageData } from "next/image";

export const getIconByWeatherCode: Record<string, StaticImageData> = {
  sunny: sunnyIcon,
  partlyCloudy: partlyCloudyIcon,
  overcast: overcastIcon,
  fog: fogIcon,
  drizzle: drizzleIcon,
  rain: rainIcon,
  snow: snowIcon,
  storm: stormIcon,
};
