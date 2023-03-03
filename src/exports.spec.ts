import {describe, expect, it} from 'vitest';

describe('module exports', () => {
  it.each(['index', 'countries', 'states', 'helpers'])('exposes the correct data from %s', async (path: string) => {
    expect.assertions(1);

    const allExports = await import(`./${path}`);

    expect(allExports).toMatchSnapshot();
  });
});
