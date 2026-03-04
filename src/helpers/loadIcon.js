export async function loadIcon(iconName) {
  try {
    const icon = await import(`../assets/icons/${iconName}.svg`);
    return icon.default;
  } catch (e) {
    const fallback = await import('../assets/icons/cloud-off.svg');
    return fallback.default;
  }
}
