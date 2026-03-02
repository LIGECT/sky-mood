export async function loadIcon(iconName) {
  try {
    const icon = await import(`../icons/${iconName}.svg`);
    return icon.default;
  } catch (e) {
    const fallback = await import('../icons/cloud-off.svg');
    return fallback.default;
  }
}
