import { useState } from "react";

import { useWeather } from "./components/hooks/useWeather";

import Header from "./components/Header/Header";

import Main from "./components/Main/Main";

import ErrorPopup from "./components/ErrorPopup/ErrorPopup";

function App() {
  const [city, setCity] = useState("varazdin");
  const { coordinates, weather, visiblePopup } = useWeather(city);

  return (
    <>
      <Header setCity={setCity} />
      <Main city={city} coordinates={coordinates} weather={weather} />
      {visiblePopup && <ErrorPopup />}
    </>
  );
}

export default App;
