import './style.css';
import { processWeatherData } from './weatherData.js';
import { renderWeather } from './ui.js';

const form = document.getElementById('search');
const input = document.getElementById('city-input');
const toggle = document.getElementById('temp-toggle');

let appState = {
  clearData: null,
  currentUnit: 'us',
};

async function getWeather(city) {
  try {
    const api = process.env.API_KEY;

    const url = new URL(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${api}`,
    );

    const response = await fetch(url);

    if (!response.ok) {
      throw Error(
        `Ooops... Error network: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();
    const processData = processWeatherData(data);
    appState.clearData = processData;
    renderWeather(processData, appState.currentUnit);
    console.log(processData, appState.currentUnit);
  } catch (error) {
    console.error('Damn, error:', error);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const cityValue = input.value.trim();
  if (cityValue === '') {
    console.warn('Enter city');
    return;
  } else {
    getWeather(cityValue);
    input.value = '';
  }
});

toggle.addEventListener('click', () => {
  const newUnit = toggle.dataset.state === 'metric' ? 'us' : 'metric';

  appState.currentUnit = newUnit;
  toggle.dataset.state = newUnit;

  if (!appState.clearData) return;

  renderWeather(appState.clearData, newUnit);
});
