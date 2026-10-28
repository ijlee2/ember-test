import { normalize } from 'node:path';

import { assert, test } from '@codemod-utils/tests';
import chokidar from 'chokidar';
import { stub } from 'sinon';
import Testem from 'testem';

import { runTests } from '../../../../src/steps/index.js';

test('steps | run-tests | run-tests-in-dev > error (testem)', async function () {
  // @ts-expect-error: Incorrect type
  const chokidarWatch = stub(chokidar, 'watch').returns({ on: stub() });
  const consoleError = stub(console, 'error');
  const testemRestart = stub(Testem.prototype, 'restart');
  const testemSetDefaultOptions = stub(Testem.prototype, 'setDefaultOptions');
  const testemStartCI = stub(Testem.prototype, 'startCI').yields(0);
  const testemStartDev = stub(Testem.prototype, 'startDev').yields(1);

  await runTests({
    buildPath: 'dist',
    launchBrowser: true,
    port: 0,
    projectRoot: 'tmp/my-project',
    qunit: {
      filter: undefined,
      module: undefined,
      seed: undefined,
    },
  });

  assert.strictEqual(chokidarWatch.calledOnce, true);
  assert.strictEqual(consoleError.calledOnce, true);
  assert.strictEqual(testemRestart.notCalled, true);
  assert.strictEqual(testemSetDefaultOptions.calledOnce, true);
  assert.strictEqual(testemStartCI.notCalled, true);
  assert.strictEqual(testemStartDev.calledOnce, true);

  assert.strictEqual(
    consoleError.args[0]?.[0],
    'testem finished with the non-zero exit code 1',
  );

  assert.deepStrictEqual(testemSetDefaultOptions.args[0]?.[0], {
    config_dir: 'tmp/my-project',
    cwd: normalize('tmp/my-project/dist'),
    launch: false,
    port: 0,
    query_params: '',
  });

  assert.deepStrictEqual(testemStartDev.args[0]?.[0], {
    launch: false,
    port: 0,
  });

  chokidarWatch.restore();
  consoleError.restore();
  testemRestart.restore();
  testemSetDefaultOptions.restore();
  testemStartCI.restore();
  testemStartDev.restore();
});
