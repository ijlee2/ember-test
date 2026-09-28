type Key = string;
type Direction = 'asc' | 'desc';

export default function sort<T extends Record<string, unknown>>(
  arrayOfObjects: T[],
  named: {
    sortBy: null | string | undefined;
  },
): T[] {
  const { sortBy } = named;

  if (sortBy === null || sortBy === undefined) {
    return arrayOfObjects;
  }

  const [key, direction] = sortBy.split(':') as [Key, Direction];
  const multiplier = direction === 'desc' ? -1 : 1;

  return arrayOfObjects.toSorted((a, b) => {
    const valueA = a[key];
    const valueB = b[key];

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return multiplier * valueA.localeCompare(valueB);
    }

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return multiplier * (valueA - valueB);
    }

    return 0;
  });
}
