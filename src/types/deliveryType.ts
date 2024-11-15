// noinspection JSUnusedGlobalSymbols

/** @see https://myparcelnl.github.io/api/#6_A_2 */
export enum DeliveryTypeId {
  Morning = 1,
  Standard = 2,
  Evening = 3,
  Pickup = 4,
  Express = 7,
}

/** @see https://myparcelnl.github.io/api/#6_A_2 */
export enum DeliveryTypeName {
  Morning = 'morning',
  Standard = 'standard',
  Evening = 'evening',
  Pickup = 'pickup',
  Express = 'express',
}

export type DeliveryTypeNameOrId = DeliveryTypeName | DeliveryTypeId;

export type DeliveryTypeNameType = `${DeliveryTypeName}`;

export type DeliveryTypeNameOrIdType = DeliveryTypeNameType | DeliveryTypeId;

export const DELIVERY_TYPE_NAMES_TO_IDS = {
  [DeliveryTypeName.Morning]: DeliveryTypeId.Morning,
  [DeliveryTypeName.Standard]: DeliveryTypeId.Standard,
  [DeliveryTypeName.Evening]: DeliveryTypeId.Evening,
  [DeliveryTypeName.Pickup]: DeliveryTypeId.Pickup,
  [DeliveryTypeName.Express]: DeliveryTypeId.Express,
} as const;

export const DELIVERY_TYPE_IDS_TO_NAMES = {
  [DeliveryTypeId.Morning]: DeliveryTypeName.Morning,
  [DeliveryTypeId.Standard]: DeliveryTypeName.Standard,
  [DeliveryTypeId.Evening]: DeliveryTypeName.Evening,
  [DeliveryTypeId.Pickup]: DeliveryTypeName.Pickup,
  [DeliveryTypeId.Express]: DeliveryTypeName.Express,
} as const;
