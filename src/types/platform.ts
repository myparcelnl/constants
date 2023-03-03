// noinspection JSUnusedGlobalSymbols

export enum PlatformId {
  MyParcel = 1,
  Flespakket = 2,
  SendMyParcel = 3,
}

export enum PlatformName {
  MyParcel = 'myparcel',
  Flespakket = 'flespakket',
  SendMyParcel = 'belgie',
}

export enum PlatformDomain {
  MyParcel = 'myparcel.nl',
  Flespakket = 'flespakket.nl',
  SendMyParcel = 'sendmyparcel.be',
}

export type PlatformNameOrId = PlatformName | PlatformId;

export type PlatformNameType = `${PlatformName}`;

export type PlatformNameOrIdType = PlatformNameType | PlatformId;

export const PLATFORM_NAMES_TO_IDS = {
  [PlatformName.MyParcel]: PlatformId.MyParcel,
  [PlatformName.SendMyParcel]: PlatformId.SendMyParcel,
  [PlatformName.Flespakket]: PlatformId.Flespakket,
};

export const PLATFORM_IDS_TO_NAMES = {
  [PlatformId.MyParcel]: PlatformName.MyParcel,
  [PlatformId.SendMyParcel]: PlatformName.SendMyParcel,
  [PlatformId.Flespakket]: PlatformName.Flespakket,
};

export const PLATFORM_IDS_TO_DOMAINS = {
  [PlatformId.MyParcel]: PlatformDomain.MyParcel,
  [PlatformId.SendMyParcel]: PlatformDomain.SendMyParcel,
  [PlatformId.Flespakket]: PlatformDomain.Flespakket,
};

export const PLATFORM_NAMES_TO_DOMAINS = {
  [PlatformName.MyParcel]: PlatformDomain.MyParcel,
  [PlatformName.SendMyParcel]: PlatformDomain.SendMyParcel,
  [PlatformName.Flespakket]: PlatformDomain.Flespakket,
};
