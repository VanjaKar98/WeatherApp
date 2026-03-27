import "./_WeatherCard.scss";

import { weatherCodes } from "../../utils/weatherCode";

import StatCard from "../StatCard/StatCard";

export default function WeatherCard({ coordinates, weather }) {
  if (!weather) return null;

  const city = coordinates.results[0].name;

  const country = coordinates.results[0].country_code;

  const temp = Math.round(weather.current.temperature_2m);

  const icon = weatherCodes[weather.current.weathercode].icon;

  const desc = weatherCodes[weather.current.weathercode].description;

  const apparentTemp = Math.round(weather.current.apparent_temperature);

  const stats = [
    {
      icon: "💧",
      value: weather.current.relative_humidity_2m,
      stat: "Humidity",
    },
    {
      icon: "💨",
      value: Math.round(weather.current.windspeed_10m),
      stat: "Wind",
    },
    { icon: "☀️", value: weather.current.uv_index, stat: "UV Index" },
    {
      icon: "👁️",
      value: Math.round(weather.current.visibility / 1000),
      stat: "Visibility",
    },
  ];

  return (
    <div className="weathercard">
      <div className="weathercard__location">
        <span>📍</span>
        <div>
          <span>{city},</span>
          <span>{country}</span>
        </div>
      </div>

      <div className="weathercard__temp">
        <div>{temp}&#176;</div>
        <span>{icon}</span>
      </div>
      <div className="weathercard__conditions">
        <span className="weathercard__description">{desc}</span>
        <span className="weathercard__feel">
          Feels like {apparentTemp}&#176;C
        </span>
      </div>

      <ul className="weathercard__stats">
        {stats.map((stat) => (
          <StatCard
            key={stat.stat}
            icon={stat.icon}
            value={stat.value}
            stat={stat.stat}
          />
        ))}
      </ul>
    </div>
  );
}
