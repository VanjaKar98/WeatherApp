import { useState } from "react";

import { useWeather } from "./components/hooks/useWeather";

import Header from "./components/Header/Header";

import Main from "./components/Main/Main";

import ErrorPopup from "./components/ErrorPopup/ErrorPopup";

function App() {
  const [city, setCity] = useState("varazdin");
  const { coordinates, weather, popupVisible, popupMessage } = useWeather(city);

  return (
    <>
      <Header setCity={setCity} />
      <Main city={city} coordinates={coordinates} weather={weather} />
      {popupVisible && <ErrorPopup message={popupMessage} />}
    </>
  );
}

export default App;
