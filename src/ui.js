export function renderWeather(data) {
  const container = document.getElementById('weather-container');
  container.replaceChildren();

  const card = document.createElement('div');
  card.classList.add('card');

  const title = document.createElement('h1');
  title.textContent = data.city;

  const temp = document.createElement('p');
  temp.textContent = `${data.temp} °F`;

  const conditions = document.createElement('p');
  conditions.textContent = data.conditions;

  const description = document.createElement('p');
  description.textContent = data.description;

  const humidity = document.createElement('p');
  humidity.textContent = data.humidity;

  const windspeed = document.createElement('p');
  windspeed.textContent = data.windspeed;

  card.append(title, temp, conditions, description, humidity, windspeed);
  container.appendChild(card);
}
