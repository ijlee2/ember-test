#!/usr/bin/env node
'use strict';

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { run } from '../src/run.js';
import type { CodemodOptions } from '../src/types/index.js';

// Provide a title to the process in `ps`
process.title = 'ember-test';

// Set codemod options
const argv = yargs(hideBin(process.argv))
  .option('filter', {
    alias: 'f',
    describe: 'Specify a keyword for which modules and tests to run',
    type: 'string',
  })
  .option('module', {
    alias: 'm',
    describe: 'Specify the name of a module to run',
    type: 'string',
  })
  .option('path', {
    describe: 'Relative path to the test build',
    type: 'string',
  })
  .option('port', {
    describe:
      'Port for running tests. Pass 0 to automatically pick an available port.',
    type: 'number',
  })
  .option('root', {
    describe: 'Where to run the codemod',
    type: 'string',
  })
  .option('server', {
    alias: 's',
    describe: 'Launch test browser',
    type: 'boolean',
  })
  .option('test-port', {
    describe:
      'Port for running tests. Pass 0 to automatically pick an available port.',
    type: 'number',
  })
  .deprecateOption('test-port', 'Use --port instead.')
  .parseSync();

const codemodOptions: CodemodOptions = {
  buildPath: argv['path'] ?? 'dist',
  filters: {
    filter: argv['filter'],
    module: argv['module'],
  },
  port: argv['test-port'] ?? argv['port'],
  projectRoot: argv['root'] ?? process.cwd(),
  server: argv['server'],
};

void run(codemodOptions);
