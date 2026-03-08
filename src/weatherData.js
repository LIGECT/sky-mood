export function processWeatherData(data) {
  const city = data.address;
  const { temp, conditions, humidity, windspeed, icon, feelslike} =
    data.currentConditions;
  const description = data.description;

  return {
    city,
    temp,
    conditions,
    description,
    humidity,
    windspeed,
    icon,
    feelslike
  };

  // console.log(data)
}
