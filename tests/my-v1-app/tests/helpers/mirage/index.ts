import type { TestContext } from '@ember/test-helpers';
import type { Server } from 'miragejs';

export interface MirageTestContext extends TestContext {
  server: Server;
}

export { setupMirage } from 'ember-cli-mirage/test-support';
