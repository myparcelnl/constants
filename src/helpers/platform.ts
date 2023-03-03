// noinspection JSUnusedGlobalSymbols

import {PLATFORM_IDS_TO_NAMES, PLATFORM_NAMES_TO_IDS, PlatformId, PlatformName, PlatformNameOrIdType} from '../types';
import {convertEnumValue} from './convertEnumValue';

export const toPlatformName = (carrier: PlatformNameOrIdType): PlatformName => {
  return convertEnumValue(PLATFORM_IDS_TO_NAMES, carrier);
};

export const toPlatformId = (carrier: PlatformNameOrIdType): PlatformId => {
  return convertEnumValue(PLATFORM_NAMES_TO_IDS, carrier);
};
