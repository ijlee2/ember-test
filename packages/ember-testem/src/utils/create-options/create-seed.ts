export function createSeed(seed: string | undefined): string | undefined {
  switch (seed) {
    case undefined: {
      return undefined;
    }

    case '': {
      const seedNew = Math.random().toString(36).slice(2);

      console.log(`Randomizing tests with seed: ${seedNew}`);

      return seedNew;
    }

    default: {
      return seed;
    }
  }
}
