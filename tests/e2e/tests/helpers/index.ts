import { execSync } from 'node:child_process';

type Options = {
  projectRoot: string;
};

export function runCommand(command: string, options: Options): string {
  const { projectRoot } = options;

  const stdout = execSync(`e2e=true pnpm ${command}`, {
    cwd: projectRoot,
    encoding: 'utf8',
  });

  return stdout;
}

export { strict as assert } from 'node:assert';
export { test } from 'node:test';
