import "./_CustomTooltip.scss";

export default function CustomTooltip({
  label,
  payload,
  active,
  unitX,
  unitY,
}) {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="custom-tooltip">
      <div className="custom-tooltip__time">
        {label}
        {unitX}
      </div>
      <div className="custom-tooltip__value">
        {payload[0].name}: {payload[0].value}
        {unitY}
      </div>
    </div>
  );
}
