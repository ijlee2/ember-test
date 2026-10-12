import type { Options } from '../../types/index.js';

export function getQueryParams(qunit: Options['qunit']): string {
  const { filter, testModule } = qunit;
  const params: string[] = [];

  if (testModule) {
    params.push(`module=${testModule}`);
  }

  if (filter) {
    params.push(`filter=${filter}`);
  }

  return params.join('&');
}
