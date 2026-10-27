import { findFiles } from '@codemod-utils/files';
import {
  convertToMap,
  convertToObject,
  type PackageJson,
} from '@codemod-utils/package-json';

import type { Options } from '../../types/index.js';

const mapArgumentNames = new Map([
  ['-f', '-f'],
  ['-m', '-m'],
  ['--filter', '--filter'],
  ['--module', '--module'],
  ['--path', '--path'],
  ['--test-port', '--port'],
]);

function getTestArguments(testScript: string): string {
  const command = ['ember test', 'ember t'].find((command) => {
    return testScript.includes(`${command} `) || testScript.endsWith(command);
  });

  if (!command) {
    return '';
  }

  const index = testScript.indexOf(command);

  const testArguments = testScript
    .substring(index + command.length)
    .trim()
    .split(/\s+/);

  const testArgumentsNew = testArguments.reduce((accumulator, token, index) => {
    const argumentName = mapArgumentNames.get(token);

    if (!argumentName) {
      return accumulator;
    }

    accumulator.push(argumentName);

    const argumentValue = testArguments.at(index + 1);

    if (argumentValue && !mapArgumentNames.has(argumentValue)) {
      accumulator.push(argumentValue);
    }

    return accumulator;
  }, [] as string[]);

  return ' ' + testArgumentsNew.join(' ');
}

export function updateScripts(
  packageJson: PackageJson,
  options: Options,
): void {
  const { packageType, projectRoot } = options;

  const scripts = convertToMap(packageJson['scripts']);
  const testScript = (scripts.get('test') ?? '') as string;

  if (testScript.includes('ember-test')) {
    return;
  }

  switch (packageType) {
    case 'v1-addon':
    case 'v1-app': {
      scripts.set('build:test', 'ember build --environment test');

      break;
    }

    case 'v2-addon':
    case 'v2-app': {
      const viteTestConfigFilePath = findFiles('vite.test.config.{mjs,mts}', {
        projectRoot,
      })[0]!;

      scripts.set(
        'build:test',
        `NODE_ENV=development vite build --config ${viteTestConfigFilePath} --mode development`,
      );

      break;
    }
  }

  scripts.set(
    'test',
    `pnpm build:test && ember-test${getTestArguments(testScript)}`,
  );

  packageJson['scripts'] = convertToObject(scripts) as Record<string, string>;
}
