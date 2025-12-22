// noinspection JSUnusedGlobalSymbols

export enum PlatformId {
  MyParcel = 1,
  Flespakket = 2,
  SendMyParcel = 3,
  Italy = 6,
}

export enum PlatformName {
  MyParcel = 'myparcel',
  Flespakket = 'flespakket',
  SendMyParcel = 'belgie',
  Italy = 'italy',
}

export enum PlatformDomain {
  MyParcel = 'myparcel.nl',
  Flespakket = 'flespakket.nl',
  SendMyParcel = 'sendmyparcel.be',
  Italy = 'myparcel.com',
}

export type PlatformNameOrId = PlatformName | PlatformId;

export type PlatformNameType = `${PlatformName}`;

export type PlatformNameOrIdType = PlatformNameType | PlatformId;

export const PLATFORM_NAMES_TO_IDS = {
  [PlatformName.MyParcel]: PlatformId.MyParcel,
  [PlatformName.SendMyParcel]: PlatformId.SendMyParcel,
  [PlatformName.Flespakket]: PlatformId.Flespakket,
  [PlatformName.Italy]: PlatformId.Italy,
};

export const PLATFORM_IDS_TO_NAMES = {
  [PlatformId.MyParcel]: PlatformName.MyParcel,
  [PlatformId.SendMyParcel]: PlatformName.SendMyParcel,
  [PlatformId.Flespakket]: PlatformName.Flespakket,
  [PlatformId.Italy]: PlatformName.Italy,
};

export const PLATFORM_IDS_TO_DOMAINS = {
  [PlatformId.MyParcel]: PlatformDomain.MyParcel,
  [PlatformId.SendMyParcel]: PlatformDomain.SendMyParcel,
  [PlatformId.Flespakket]: PlatformDomain.Flespakket,
  [PlatformId.Italy]: PlatformDomain.Italy,
};

export const PLATFORM_NAMES_TO_DOMAINS = {
  [PlatformName.MyParcel]: PlatformDomain.MyParcel,
  [PlatformName.SendMyParcel]: PlatformDomain.SendMyParcel,
  [PlatformName.Flespakket]: PlatformDomain.Flespakket,
  [PlatformName.Italy]: PlatformDomain.Italy,
};
