import {PlatformId, PlatformName} from '../types';
import {describe, expect, it} from 'vitest';
import {toPlatformId, toPlatformName} from './platform';

describe('platform helpers', () => {
  it('converts name to id', () => {
    expect(toPlatformId(PlatformName.MyParcel)).toBe(PlatformId.MyParcel);
  });

  it('converts id to name', () => {
    expect(toPlatformName(PlatformId.MyParcel)).toBe(PlatformName.MyParcel);
  });
});
