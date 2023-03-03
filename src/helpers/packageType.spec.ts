import {PackageTypeId, PackageTypeName} from '../types';
import {describe, expect, it} from 'vitest';
import {toPackageTypeId, toPackageTypeName} from './packageType';

describe('packageType helpers', () => {
  it('converts name to id', () => {
    expect(toPackageTypeId(PackageTypeName.DigitalStamp)).toBe(PackageTypeId.DigitalStamp);
  });

  it('converts id to name', () => {
    expect(toPackageTypeName(PackageTypeId.DigitalStamp)).toBe(PackageTypeName.DigitalStamp);
  });
});
