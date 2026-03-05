async function parseSvg(file) {
  const response = await fetch(file.default);
  const svgText = await response.text();
  const parser = new DOMParser();
  return parser.parseFromString(svgText, 'image/svg+xml').querySelector('svg');
}

export async function loadIcon(iconName) {
  try {
    const icon = await import(`../assets/icons/${iconName}.svg`);
    return await parseSvg(icon);
  } catch {
    const fallback = await import('../assets/icons/cloud-off.svg');
    return await parseSvg(fallback);
  }
}
