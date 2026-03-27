import "./_ForecastDay.scss";

export default function ForecastDay({ day, icon, max, min }) {
  const wday = day.slice(0, 3);
  const tmax = Math.round(max);
  const tmin = Math.round(min);

  return (
    <li className="forecastday">
      <div className="forecastday__day">{wday}</div>
      <div className="forecastday__weather">{icon}</div>
      <div className="forecastday__temp">
        <span className="forecastday__high">{tmax}&#176;</span>
        <span className="forecastday__low">{tmin}&#176;</span>
      </div>
    </li>
  );
}
