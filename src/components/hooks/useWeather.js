import { useState, useEffect } from "react";

import { fetchCityCoordinates, fetchWeather } from "../api/weather";

export function useWeather(city) {
  const [coordinates, setCoordinates] = useState(null);
  const [weather, setWeather] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        let coordinates = await fetchCityCoordinates(city);
        if (!coordinates.results?.length) {
          setPopupMessage("City not found");
          setPopupVisible(true);
          return;
        }
        setCoordinates(coordinates);
        let weather = await fetchWeather(coordinates);
        setWeather(weather);
      } catch (error) {
        setPopupMessage("Error occurred during fetch");
        setPopupVisible(true);
      }
    }
    getData();

    const timeout = setTimeout(() => setPopupVisible(false), 1500);
    return () => clearTimeout(timeout);
  }, [city]);

  return { coordinates, weather, popupVisible, popupMessage };
}
