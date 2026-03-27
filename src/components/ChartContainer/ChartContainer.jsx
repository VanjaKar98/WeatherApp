import { useState, useEffect } from "react";

import "./_ChartContainer.scss";

import Button from "../Button/Button";

import TempChart from "../TempChart/TempChart";

import RainChart from "../RainChart/RainChart";

import WindChart from "../WindChart/WindChart";

export default function ChartContainer({ weather }) {
  const [activeBtn, setBtnActive] = useState("temperature");
  const [isMobile, setIsMobile] = useState(window.innerWidth > 530);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth > 530);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!weather) return null;

  const hourlyData = weather.hourly.time.slice(6, 23).map((el, i) => {
    return {
      time: +el.slice(11, 13),
      temp: Math.round(weather.hourly.temperature_2m[i + 6]),
      rain: weather.hourly.precipitation_probability[i + 6],
      wind: Math.round(weather.hourly.windspeed_10m[i + 6]),
    };
  });

  return (
    <div className="chart-container">
      <div className="chart-container__header">
        <h2 className="chart-container__title">today&#39;s chart</h2>
        <div className="chart-container__tabs">
          {buttons.map((btn) => (
            <Button
              key={btn.id}
              label={btn.label}
              isActive={activeBtn === btn.id}
              onClick={() => setBtnActive(btn.id)}
            />
          ))}
        </div>
      </div>
      <div className="chart-container__chart">
        {activeBtn === "temperature" && (
          <TempChart
            data={hourlyData}
            isMobile={isMobile}
            unitX="h"
            unitY="°"
          />
        )}
        {activeBtn === "rain" && (
          <RainChart
            data={hourlyData}
            unitX="h"
            unitY="%"
            isMobile={isMobile}
          />
        )}
        {activeBtn === "wind" && (
          <WindChart
            data={hourlyData}
            unitX="h"
            unitY="km/h"
            isMobile={isMobile}
          />
        )}
      </div>
    </div>
  );
}

const buttons = [
  { id: "temperature", label: "🌡 temperature" },
  { id: "rain", label: "🌧 rain" },
  { id: "wind", label: "💨 wind" },
];
