import Header from "@/components/Header";
import SearchSection from "@/components/SearchSection";
import TodayWeather from "@/components/TodayWeather";
import WeatherDetails from "@/components/WeatherDetails";
import DailyForecast from "@/components/DailyForecast";
import HourlyForecast from "@/components/HourlyForecast";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen min-w-62.5 px-4 py-8 md:px-6 lg:px-8 mx-auto">
        <SearchSection />

        <div className="flex flex-col justify-center lg:flex-row gap-8">
          <div className="lg:flex-1 max-w-200">
            <TodayWeather />
            <WeatherDetails />
            <DailyForecast />
          </div>

          <HourlyForecast />
        </div>
      </main>
    </>
  );
}
