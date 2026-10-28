import { availableParallelism } from 'node:os';
import { normalize } from 'node:path';

import { assert, test } from '@codemod-utils/tests';

import { runTests } from '../../../../src/steps/index.js';
import { restoreMethods, stubMethods } from '../../../helpers/stub.js';

test('steps | run-tests | run-tests-in-ci > error (testem)', async function () {
  const stubs = stubMethods();

  stubs.testemStartCI.yields(1);
  stubs.testemStartDev.yields(0);

  await runTests({
    buildPath: 'dist',
    launchBrowser: false,
    port: 0,
    projectRoot: 'tmp/my-project',
    qunit: {
      filter: undefined,
      module: undefined,
      seed: undefined,
    },
  });

  assert.strictEqual(stubs.chokidarWatch.notCalled, true);
  assert.strictEqual(stubs.consoleError.calledOnce, true);
  assert.strictEqual(stubs.testemRestart.notCalled, true);
  assert.strictEqual(stubs.testemSetDefaultOptions.calledOnce, true);
  assert.strictEqual(stubs.testemStartCI.calledOnce, true);
  assert.strictEqual(stubs.testemStartDev.notCalled, true);

  assert.strictEqual(
    stubs.consoleError.args[0]?.[0],
    'testem finished with the non-zero exit code 1',
  );

  assert.deepStrictEqual(stubs.testemSetDefaultOptions.args[0]?.[0], {
    config_dir: 'tmp/my-project',
    cwd: normalize('tmp/my-project/dist'),
    launch: false,
    parallel: availableParallelism(),
    port: 0,
    query_params: '',
  });

  assert.deepStrictEqual(stubs.testemStartCI.args[0]?.[0], {
    launch: false,
    port: 0,
  });

  restoreMethods();
});
