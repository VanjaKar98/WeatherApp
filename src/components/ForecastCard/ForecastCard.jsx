import "./_ForecastCard.scss";

import { weatherCodes } from "../../utils/weatherCode";

import ForecastDay from "../ForecastDay/ForecastDay";

export default function ForecastCard({ weather }) {
  if (!weather) return null;

  //+DATE DAY ELEMENT USING getDate AND days ARRAY

  const forecast = weather.daily.time.map((day, i) => ({
    day: days[new Date(day).getDay()],
    tmax: weather.daily.temperature_2m_max[i],
    tmin: weather.daily.temperature_2m_min[i],
    icon: weatherCodes[weather.daily.weathercode[i]]?.icon,
  }));

  return (
    <div className="forecastcard">
      <h2 className="forecastcard__title">7-day forecast</h2>
      <ul className="forecastcard__forecast">
        {forecast.map((entry) => (
          <ForecastDay
            key={entry.day}
            day={entry.day}
            max={entry.tmax}
            min={entry.tmin}
            icon={entry.icon}
          />
        ))}
      </ul>
    </div>
  );
}

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
