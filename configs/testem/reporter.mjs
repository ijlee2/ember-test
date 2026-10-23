export class Reporter {
  constructor() {
    this.numTests = {
      failed: 0,
      passed: 0,
      skipped: 0,
      total: 0,
    };

    this.runtime = 0;
  }

  finish() {
    const { failed, passed, skipped, total } = this.numTests;

    process.stdout.write(
      `${total} tests, ${passed} passed, ${failed} failed, ${skipped} skipped\n`,
    );

    // process.stdout.write(`Runtime: ${Math.ceil(this.runtime / 100) / 10} s\n`);
  }

  report(_prefix, data) {
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
