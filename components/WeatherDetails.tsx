export default function WeatherDetails() {
  const weatherDetails = [
    {
      title: "Feels Like",
      value: "18°",
    },
    {
      title: "Humidity",
      value: "46%",
    },
    {
      title: "Wind",
      value: "14 km/h",
    },
    {
      title: "Pricipitation",
      value: "0 mm",
    },
  ];

  return (
    <div className="mb-10">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {weatherDetails.map(({ title, value }) => (
          <div
            key={title}
            className="bg-[hsl(243,27%,20%)] p-4 sm:p-5 rounded-xl border border-white/10"
          >
            <p className="text-white/70 text-sm sm:text mb-2">{title}</p>
            <p className="text-2xl sm:text-2xl font-semibold">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
