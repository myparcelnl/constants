// noinspection JSUnusedGlobalSymbols

import {CARRIER_IDS_TO_NAMES, CARRIER_NAMES_TO_IDS, CarrierId, CarrierName, CarrierNameOrIdType} from '../types';
import {convertEnumValue} from './convertEnumValue';

export const toCarrierName = (carrier: CarrierNameOrIdType): CarrierName => {
  return convertEnumValue(CARRIER_IDS_TO_NAMES, carrier);
};

export const toCarrierId = (carrier: CarrierNameOrIdType): CarrierId => {
  return convertEnumValue(CARRIER_NAMES_TO_IDS, carrier);
};
