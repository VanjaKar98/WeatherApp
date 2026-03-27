import { useState, useEffect } from "react";

import { fetchCityCoordinates, fetchWeather } from "../api/weather";

export function useWeather(city) {
  const [coordinates, setCoordinates] = useState(null);
  const [weather, setWeather] = useState(null);
  const [visiblePopup, setvisiblePopup] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        let coordinates = await fetchCityCoordinates(city);
        if (!coordinates.results?.length) {
          setvisiblePopup(true);
          return;
        }
        setCoordinates(coordinates);
        let weather = await fetchWeather(coordinates);
        setWeather(weather);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
    const timeout = setTimeout(() => setvisiblePopup(false), 1500);
    return () => clearTimeout(timeout);
  }, [city]);

  return { coordinates, weather, visiblePopup };
}
