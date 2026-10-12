import type { Options } from '../../types/index.js';

export function getQueryParams(options: Pick<Options, 'qunit'>): string {
  const { qunit } = options;
  const params: string[] = [];

  if (qunit.testModule) {
    params.push(`module=${qunit.testModule}`);
  }

  if (qunit.filter) {
    params.push(`filter=${qunit.filter}`);
  }

  return params.join('&');
}
