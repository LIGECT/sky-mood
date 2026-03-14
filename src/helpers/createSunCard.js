import { calcSunProgress, getSunStatus } from './sunTime.js';

export function createSunCard(sunrise, sunset) {
  const { phase } = getSunStatus(sunrise, sunset);
  const sunCard = document.createElement('section');
  sunCard.classList.add('glass-card');
  const sunPhase = document.createElement('h4');
  sunPhase.textContent = phase;
  const sunTrack = document.createElement('div');
  sunTrack.classList.add('sun-track');
  const sunFill = document.createElement('div');
  sunFill.classList.add('sun-fill');
  const sunMarker = document.createElement('div');
  sunMarker.classList.add('sun-marker');
  sunTrack.append(sunFill, sunMarker);

  const sunLabels = document.createElement('div');
  sunLabels.classList.add('sun-labels');
  const sunriseTimeBlock = document.createElement('span');
  sunriseTimeBlock.textContent = sunrise.slice(0, 5);
  const sunsetTimeBlock = document.createElement('span');
  sunsetTimeBlock.textContent = sunset.slice(0, 5);

  sunLabels.append(sunriseTimeBlock, sunsetTimeBlock);

  sunCard.append(sunPhase, sunTrack, sunLabels);

  return sunCard;
}
