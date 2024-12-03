// noinspection JSUnusedGlobalSymbols

/**
 * @see https://myparcelnl.github.io/api/#6_A_3
 */
export enum ShipmentOptionName {
  AgeCheck = 'age_check',
  Collect = 'collect',
  CooledDelivery = 'cooled_delivery',
  Insurance = 'insurance',
  LargeFormat = 'large_format',
  OnlyRecipient = 'only_recipient',
  PrinterlessReturn = 'printerless_return',
  Return = 'return',
  SameDayDelivery = 'same_day_delivery',
  Signature = 'signature',
}

export type ShipmentOptionNameType = `${ShipmentOptionName}`;
