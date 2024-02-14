// noinspection JSUnusedGlobalSymbols

/** @see https://myparcelnl.github.io/api/#6_A_1 */
export enum PackageTypeId {
  Package = 1,
  Mailbox = 2,
  Letter = 3,
  DigitalStamp = 4,
  Pallet = 5,
  PackageSmall = 6,
}

/** @see https://myparcelnl.github.io/api/#6_A_1 */
export enum PackageTypeName {
  Package = 'package',
  Mailbox = 'mailbox',
  Letter = 'letter',
  DigitalStamp = 'digital_stamp',
  Pallet = 'pallet',
  PackageSmall = 'package_small',
}

export type PackageTypeNameOrId = PackageTypeName | PackageTypeId;

export type PackageTypeNameType = `${PackageTypeName}`;

export type PackageTypeNameOrIdType = PackageTypeNameType | PackageTypeId;

export const PACKAGE_TYPE_NAMES_TO_IDS = {
  [PackageTypeName.Package]: PackageTypeId.Package,
  [PackageTypeName.Mailbox]: PackageTypeId.Mailbox,
  [PackageTypeName.Letter]: PackageTypeId.Letter,
  [PackageTypeName.DigitalStamp]: PackageTypeId.DigitalStamp,
  [PackageTypeName.Pallet]: PackageTypeId.Pallet,
  [PackageTypeName.PackageSmall]: PackageTypeId.PackageSmall,
} as const;

export const PACKAGE_TYPE_IDS_TO_NAMES = {
  [PackageTypeId.Package]: PackageTypeName.Package,
  [PackageTypeId.Mailbox]: PackageTypeName.Mailbox,
  [PackageTypeId.Letter]: PackageTypeName.Letter,
  [PackageTypeId.DigitalStamp]: PackageTypeName.DigitalStamp,
  [PackageTypeId.Pallet]: PackageTypeName.Pallet,
  [PackageTypeId.PackageSmall]: PackageTypeName.PackageSmall,
} as const;
