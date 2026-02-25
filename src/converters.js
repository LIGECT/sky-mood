function round(value) {
  return Number(value.toFixed(2));
}

export function celsiusToFahrenheit(celsius) {
  return round(celsius * 1.8 + 32);
}
