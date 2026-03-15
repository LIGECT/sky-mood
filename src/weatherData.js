export function processWeatherData(data) {
  console.log(data);
  const city = data.address;
  const { temp, conditions, humidity, windspeed, icon, feelslike, datetime} =
    data.currentConditions;
  const description = data.description;
  const days = data.days;
  const { precipprob, sunrise, sunset } = data.days[0];

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
    precipprob,
    sunrise,
    sunset,
    datetime,
  };
}
