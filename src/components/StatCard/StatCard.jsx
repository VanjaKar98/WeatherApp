import "./_StatCard.scss";

export default function StatCard({ icon, value, stat }) {
  let unit;

  switch (stat) {
    case "Humidity":
      unit = <> &#37;</>;
      break;
    case "Wind":
      unit = " km/h";
      break;
    case "Visibility":
      unit = " km";
      break;
  }

  return (
    <li className="statcard">
      <div className="statcard__icon">{icon}</div>
      <div className="statcard__value">
        {value}
        {unit}
      </div>
      <div className="statcard__label">{stat}</div>
    </li>
  );
}
