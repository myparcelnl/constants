import {isEnumValue} from '@myparcel-dev/ts-utils';

export const convertEnumValue = <T>(enumObject: Record<string, unknown>, value: string | number): T => {
  return isEnumValue(value, enumObject) ? (value as T) : (enumObject[value] as T);
};
