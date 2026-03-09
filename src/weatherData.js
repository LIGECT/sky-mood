export function processWeatherData(data) {
  // console.log(data);
  const city = data.address;
  const { temp, conditions, humidity, windspeed, icon, feelslike } =
    data.currentConditions;
  const description = data.description;
  const days = data.days;

  return {
    city,
    temp,
    conditions,
    description,
    humidity,
    windspeed,
    icon,
    feelslike,
    days,
  };
}
