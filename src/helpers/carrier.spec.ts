import {CarrierId, CarrierName} from '../types';
import {describe, expect, it} from 'vitest';
import {toCarrierId, toCarrierName} from './carrier';

describe('carrier helpers', () => {
  it('converts name to id', () => {
    expect(toCarrierId(CarrierName.PostNl)).toBe(CarrierId.PostNl);
  });

  it('converts id to name', () => {
    expect(toCarrierName(CarrierId.PostNl)).toBe(CarrierName.PostNl);
  });
});
