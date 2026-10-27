const latestVersions = new Map([
  ['@embroider/vite', '1.8.0'],
  ['ember-testem', '0.5.1'],
  ['vite', '8.3.5'],
]);

export function getLatestVersion(packageName: string): string {
  if (!latestVersions.has(packageName)) {
    throw new RangeError(
      `ERROR: The latest version of \`${packageName}\` is unknown.\n`,
    );
  }

  return `^${latestVersions.get(packageName)}`;
}
