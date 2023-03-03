// noinspection JSUnusedGlobalSymbols

import {
  DELIVERY_TYPE_IDS_TO_NAMES,
  DELIVERY_TYPE_NAMES_TO_IDS,
  DeliveryTypeId,
  DeliveryTypeName,
  DeliveryTypeNameOrIdType,
} from '../types';
import {convertEnumValue} from './convertEnumValue';

export const toDeliveryTypeName = (carrier: DeliveryTypeNameOrIdType): DeliveryTypeName => {
  return convertEnumValue(DELIVERY_TYPE_IDS_TO_NAMES, carrier);
};

export const toDeliveryTypeId = (carrier: DeliveryTypeNameOrIdType): DeliveryTypeId => {
  return convertEnumValue(DELIVERY_TYPE_NAMES_TO_IDS, carrier);
};
