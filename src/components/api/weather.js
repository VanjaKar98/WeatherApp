export async function fetchCityCoordinates(city) {
  const URL = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;

  const res = await fetch(URL);
  if (!res.ok) throw new Error("Error occured during fetching!!!");

  return res.json();
}

export async function fetchWeather(coor) {
  const { latitude, longitude } = coor.results[0];

  const URL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,windspeed_10m,weathercode,apparent_temperature,visibility,uv_index&daily=temperature_2m_max,temperature_2m_min,weathercode&hourly=temperature_2m,precipitation_probability,windspeed_10m&timezone=auto`;

  const res = await fetch(URL);
  if (!res.ok) throw new Error("Error occured during fetching!!!");

  return res.json();
}
