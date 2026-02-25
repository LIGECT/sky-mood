import { celsiusToFahrenheit } from './converters.js';

export function renderWeather(data, currentUnit) {
  const container = document.getElementById('weather-container');
  container.replaceChildren();

  const card = document.createElement('div');
  card.classList.add('card');

  const title = document.createElement('h1');
  title.textContent = data.city;

  const temp = document.createElement('p');
  if (currentUnit === 'metric') {
    temp.textContent = data.temp + ' °C';
  } else {
    temp.textContent = `${celsiusToFahrenheit(data.temp)} °F`;
  }

  const conditions = document.createElement('p');
  conditions.textContent = data.conditions;

  const description = document.createElement('p');
  description.textContent = data.description;

  const humidity = document.createElement('p');
  humidity.textContent = data.humidity + ' %';

  const windspeed = document.createElement('p');
  windspeed.textContent = data.windspeed;

  card.append(title, temp, conditions, description, humidity, windspeed);
  container.appendChild(card);
}
