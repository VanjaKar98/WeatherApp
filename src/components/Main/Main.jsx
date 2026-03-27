import "./_Main.scss";

import Section from "../Section/Section";

import WeatherCard from "../WeatherCard/WeatherCard";

import ForecastCard from "../ForecastCard/ForecastCard";

import ChartContainer from "../ChartContainer/ChartContainer";

export default function Main({ coordinates, weather }) {
  return (
    <main className="main">
      <div className="main__inner">
        <Section className="section__local">
          <WeatherCard coordinates={coordinates} weather={weather} />
        </Section>
        <Section className="section__week">
          <ForecastCard weather={weather} />
        </Section>
        <Section className="section__charts">
          <ChartContainer weather={weather} />
        </Section>
      </div>
    </main>
  );
}
