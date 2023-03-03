// noinspection JSUnusedGlobalSymbols
import {
  PACKAGE_TYPE_IDS_TO_NAMES,
  PACKAGE_TYPE_NAMES_TO_IDS,
  PackageTypeId,
  PackageTypeName,
  PackageTypeNameOrIdType,
} from '../types';
import {convertEnumValue} from './convertEnumValue';

export const toPackageTypeName = (carrier: PackageTypeNameOrIdType): PackageTypeName => {
  return convertEnumValue(PACKAGE_TYPE_IDS_TO_NAMES, carrier);
};

export const toPackageTypeId = (carrier: PackageTypeNameOrIdType): PackageTypeId => {
  return convertEnumValue(PACKAGE_TYPE_NAMES_TO_IDS, carrier);
};
