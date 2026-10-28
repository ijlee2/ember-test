type Item = {
  message?: string;
  passed: boolean;
};

type Data = {
  error: Error | undefined;
  failed: number;
  items: Item[];
  launcherId: string;
  logs: {
    text: string;
    type: 'error' | 'info' | 'log' | 'warn';
  }[];
  name: string;
  originalResultObj: {
    failed: number;
    id: number;
    items: Item[];
    name: string;
    passed: number;
    runDuration: number;
    skipped: boolean;
    testId: string;
    todo: boolean;
    total: number;
  };
  passed: boolean;
  pending: boolean | undefined;
  runDuration: number;
  skipped: boolean;
  todo: boolean;
};

export class Reporter {
  private numTests: {
    failed: number;
    passed: number;
    skipped: number;
    total: number;
  };

  private runtime: number;

  constructor() {
    this.numTests = {
      failed: 0,
      passed: 0,
      skipped: 0,
      total: 0,
    };

    this.runtime = 0;
  }

  finish(): void {
    const { failed, passed, skipped, total } = this.numTests;

    process.stdout.write(
      `${total} tests, ${passed} passed, ${failed} failed, ${skipped} skipped\n`,
    );

    // process.stdout.write(`Runtime: ${Math.ceil(this.runtime / 100) / 10} s\n`);
  }

  report(_prefix: string, data: Data): void {
    const { failed, id, name, passed, runDuration } = data.originalResultObj;

    if (passed) {
      this.numTests.passed++;
    } else if (failed) {
      this.numTests.failed++;
    } else {
      this.numTests.skipped++;
    }

    this.numTests.total++;
    this.runtime += runDuration;

    process.stdout.write(`${id}. ${name}\n`);
  }
}
