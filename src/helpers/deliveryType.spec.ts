import {DeliveryTypeId, DeliveryTypeName} from '../types';
import {describe, expect, it} from 'vitest';
import {toDeliveryTypeId, toDeliveryTypeName} from './deliveryType';

describe('deliveryType helpers', () => {
  it('converts name to id', () => {
    expect(toDeliveryTypeId(DeliveryTypeName.Morning)).toBe(DeliveryTypeId.Morning);
  });

  it('converts id to name', () => {
    expect(toDeliveryTypeName(DeliveryTypeId.Morning)).toBe(DeliveryTypeName.Morning);
  });
});
