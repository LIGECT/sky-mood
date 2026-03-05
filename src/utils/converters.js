function round(value) {
  return Number(value.toFixed(2));
}

export function celsiusToFahrenheit(celsius) {
  return round(celsius * 1.8 + 32);
}

export function kmhToMph(speed) {
  return Math.round(speed * 0.621371);
}
