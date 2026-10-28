function generateSeed(): string {
  return Math.random().toString(36).slice(2);
}

export function createSeed(seed: string | undefined): string | undefined {
  switch (seed) {
    case undefined: {
      return undefined;
    }

    case '': {
      let seedNew = generateSeed();

      while (seedNew === '') {
        seedNew = generateSeed();
      }

      console.log(`Randomizing tests with seed: ${seedNew}`);

      return seedNew;
    }

    default: {
      return seed;
    }
  }
}
