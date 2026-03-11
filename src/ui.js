import { celsiusToFahrenheit, kmhToMph } from './utils/converters.js';
import { loadIcon } from './helpers/loadIcon.js';
import { createCard } from './helpers/createCard.js';

export async function renderWeather(data, currentUnit) {
  const container = document.getElementById('weather-container');
  container.replaceChildren();

  const mainCard = document.createElement('section');
  mainCard.classList.add('glass-card');

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

  const hourlyCard = document.createElement('div');
  hourlyCard.classList.add('glass-card', 'hourly');

  const hourlyWrapper = document.createElement('div');

  const hourlyCardTitle = document.createElement('h3');
  hourlyCardTitle.textContent = 'Hourly Forecast';

  const todayHours = data.days[0].hours ?? [];
  const tomorrowHours = data.days[1]?.hours ?? [];
  const hourlyData = [...todayHours, ...tomorrowHours]
    .filter((hour) => hour.temp !== null)
    .slice(0, 24);

  hourlyData.forEach((hour) => {
    const miniHourlyCard = document.createElement('div');
    miniHourlyCard.classList.add('hourly-item');
    const time = document.createElement('p');
    time.textContent = hour.datetime.slice(0, 5);

    const temp = document.createElement('p');
    if (currentUnit === 'metric') {
      temp.textContent = hour.temp + ' °C';
    } else {
      temp.textContent = `${celsiusToFahrenheit(hour.temp)} °F`;
    }

    const conditions = document.createElement('p');
    conditions.textContent = hour.conditions;

    miniHourlyCard.append(time, temp, conditions);
    hourlyWrapper.appendChild(miniHourlyCard);
  });

  hourlyCard.append(hourlyCardTitle, hourlyWrapper);

  const humidityCard = createCard({
    title: 'Humidity',
    value: data.humidity + ' %',
  });
  const humidityIcon = await loadIcon('droplets');
  humidityIcon.classList.add('icon-secondary-card');
  humidityCard.appendChild(humidityIcon);

  const probabilityCard = createCard({
    title: "Chance of Rain",
    value: data.days[0].precipprob + ' %',
  })
  const probabilityIcon = await loadIcon('umbrella')
  probabilityIcon.classList.add('icon-secondary-card');
  probabilityCard.appendChild(probabilityIcon);


  const windValue =
    currentUnit === 'metric'
      ? `${data.windspeed} km/h`
      : `${kmhToMph(data.windspeed)} mph`;

  const windspeedCard = createCard({
    title: 'Wind Speed',
    value: windValue,
  });
  const windspeedIcon = await loadIcon('wind');
  windspeedIcon.classList.add('icon-secondary-card');
  windspeedCard.appendChild(windspeedIcon);

  const feelsValue =
    currentUnit === 'metric'
      ? `${data.feelslike} °C`
      : `${celsiusToFahrenheit(data.feelslike)}  °F`;

  const feelslikeCard = createCard({
    title: 'Feels Like',
    value: feelsValue,
  });
  const feelslikeIcon = await loadIcon('thermometer');
  feelslikeIcon.classList.add('icon-secondary-card');
  feelslikeCard.appendChild(feelslikeIcon);

  mainCard.append(title, tempIndicator, conditions, description);

  container.append(
    mainCard,
    hourlyCard,
    humidityCard,
    windspeedCard,
    feelslikeCard,
    probabilityCard
  );
}
