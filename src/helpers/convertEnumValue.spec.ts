import {describe, expect, it} from 'vitest';
import {convertEnumValue} from './convertEnumValue';

export enum TestName {
  Test1 = 'test1',
  Test2 = 'test2',
  Test3 = 'test3',
}

export enum TestId {
  Test1 = 1,
  Test2 = 2,
  Test3 = 3,
}

export const TEST_NAMES_TO_IDS = {
  [TestName.Test1]: TestId.Test1,
  [TestName.Test2]: TestId.Test2,
  [TestName.Test3]: TestId.Test3,
} as const;

export const TEST_IDS_TO_NAMES = {
  [TestId.Test1]: TestName.Test1,
  [TestId.Test2]: TestName.Test2,
  [TestId.Test3]: TestName.Test3,
} as const;

describe('convertEnumValue', () => {
  it('converts a name to its corresponding id', () => {
    expect(convertEnumValue(TEST_NAMES_TO_IDS, TestName.Test1)).toBe(TestId.Test1);
  });

  it('converts a string to its corresponding id', () => {
    expect(convertEnumValue(TEST_NAMES_TO_IDS, 'test1')).toBe(TestId.Test1);
  });

  it('returns value if it is already an enum id', () => {
    expect(convertEnumValue(TEST_NAMES_TO_IDS, TestId.Test1)).toBe(TestId.Test1);
  });

  it('returns value if it is already an id', () => {
    expect(convertEnumValue(TEST_NAMES_TO_IDS, 1)).toBe(TestId.Test1);
  });

  it('converts an id to its corresponding name', () => {
    expect(convertEnumValue(TEST_IDS_TO_NAMES, TestId.Test1)).toBe(TestName.Test1);
  });

  it('converts a number to its corresponding name', () => {
    expect(convertEnumValue(TEST_IDS_TO_NAMES, 1)).toBe(TestName.Test1);
  });

  it('returns value if it is already an enum name', () => {
    expect(convertEnumValue(TEST_IDS_TO_NAMES, TestName.Test1)).toBe(TestName.Test1);
  });

  it('returns value if it is already a name', () => {
    expect(convertEnumValue(TEST_IDS_TO_NAMES, 'test1')).toBe(TestName.Test1);
  });
});
