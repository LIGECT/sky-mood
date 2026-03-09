export function createCard({ title, value }) {
  const card = document.createElement('section');
  card.classList.add('glass-card');

  const titleElement = document.createElement('h4');
  titleElement.className = 'title-secondary-card';
  titleElement.textContent = title;

  const valueElement = document.createElement('p');
  valueElement.textContent = value;

  card.append(titleElement, valueElement);
  return card;
}
