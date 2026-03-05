import { celsiusToFahrenheit } from './utils/converters.js';
import { loadIcon } from './helpers/loadIcon.js';
import { kmhToMph } from './utils/converters.js';

export async function renderWeather(data, currentUnit) {
  const container = document.getElementById('weather-container');
  // container.replaceChildren();

  const mainCard = document.getElementById('main-card');
  mainCard.replaceChildren();

  const card = document.createElement('div');
  card.classList.add('card');

  const title = document.createElement('h2');
  title.textContent = data.city;

  const tempIndicator = document.createElement('div');
  tempIndicator.classList.add('temp-indicator');

  const temp = document.createElement('h1');
  temp.classList.add('temp-main');
  if (currentUnit === 'metric') {
    temp.textContent = data.temp + ' °C';
  } else {
    temp.textContent = `${celsiusToFahrenheit(data.temp)} °F`;
  }

  const mainIcon = await loadIcon(data.icon);
  mainIcon.classList.add('icon-main-card');

  tempIndicator.append(temp, mainIcon);

  const conditions = document.createElement('h3');
  conditions.textContent = data.conditions;

  const description = document.createElement('p');
  description.textContent = data.description;

  const humidity = document.createElement('p');
  humidity.textContent = data.humidity + ' %';
  humidity.className = 'humidity';

  const windspeed = document.createElement('p');
  if (currentUnit === 'metric') {
    windspeed.textContent = data.windspeed + ' km/h';
  } else {
    windspeed.textContent = kmhToMph(data.windspeed) + ' mph';
  }
  windspeed.className = 'windspeed';

  card.append(
    title,
    tempIndicator,
    conditions,
    description,
    humidity,
    windspeed,
  );
  mainCard.appendChild(card);
  container.appendChild(mainCard);
}
