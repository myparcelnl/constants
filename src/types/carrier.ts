// noinspection JSUnusedGlobalSymbols

export enum CarrierId {
  PostNl = 1,
  Bpost = 2,
  CheapCargo = 3,
  Dpd = 4,
  Instabox = 5,
  Dhl = 6,
  Bol = 7,
  // @deprecated Use CarrierId.Bol instead. Will be removed in the next major version
  BolCom = 7,
  // @deprecated Use CarrierId.UpsStandard instead.
  Ups = 8,
  DhlForYou = 9,
  DhlParcelConnect = 10,
  DhlEuroPlus = 11,
  UpsStandard = 12,
  UpsExpressSaver = 13,
  Gls = 14,
  Brt = 15,
}

export enum CarrierName {
  PostNl = 'postnl',
  Bpost = 'bpost',
  CheapCargo = 'cheapcargo',
  Dpd = 'dpd',
  Instabox = 'instabox',
  Dhl = 'dhl',
  Bol = 'bol.com',
  // @deprecated Use CarrierName.Bol instead. Will be removed in the next major version
  BolCom = 'bol.com',
  // @deprecated Use CarrierName.UpsStandard instead.
  Ups = 'ups',
  DhlForYou = 'dhlforyou',
  DhlParcelConnect = 'dhlparcelconnect',
  DhlEuroPlus = 'dhleuroplus',
  UpsStandard = 'upsstandard',
  UpsExpressSaver = 'upsexpresssaver',
  Gls = 'gls',
  Brt = 'brt',
}

export type CarrierNameOrId = CarrierName | CarrierId;

export type CarrierNameType = `${CarrierName}`;

export type CarrierNameOrIdType = CarrierNameType | CarrierId;

export const CARRIER_NAMES_TO_IDS = {
  [CarrierName.PostNl]: CarrierId.PostNl,
  [CarrierName.Bpost]: CarrierId.Bpost,
  [CarrierName.CheapCargo]: CarrierId.CheapCargo,
  [CarrierName.Dpd]: CarrierId.Dpd,
  [CarrierName.Instabox]: CarrierId.Instabox,
  [CarrierName.Dhl]: CarrierId.Dhl,
  [CarrierName.Bol]: CarrierId.Bol,
  [CarrierName.Ups]: CarrierId.Ups,
  [CarrierName.DhlForYou]: CarrierId.DhlForYou,
  [CarrierName.DhlParcelConnect]: CarrierId.DhlParcelConnect,
  [CarrierName.DhlEuroPlus]: CarrierId.DhlEuroPlus,
  [CarrierName.UpsStandard]: CarrierId.UpsStandard,
  [CarrierName.UpsExpressSaver]: CarrierId.UpsExpressSaver,
  [CarrierName.Gls]: CarrierId.Gls,
  [CarrierName.Brt]: CarrierId.Brt,
} as const;

export const CARRIER_IDS_TO_NAMES = {
  [CarrierId.PostNl]: CarrierName.PostNl,
  [CarrierId.Bpost]: CarrierName.Bpost,
  [CarrierId.CheapCargo]: CarrierName.CheapCargo,
  [CarrierId.Dpd]: CarrierName.Dpd,
  [CarrierId.Instabox]: CarrierName.Instabox,
  [CarrierId.Dhl]: CarrierName.Dhl,
  [CarrierId.Bol]: CarrierName.Bol,
  [CarrierId.Ups]: CarrierName.Ups,
  [CarrierId.DhlForYou]: CarrierName.DhlForYou,
  [CarrierId.DhlParcelConnect]: CarrierName.DhlParcelConnect,
  [CarrierId.DhlEuroPlus]: CarrierName.DhlEuroPlus,
  [CarrierId.UpsStandard]: CarrierName.UpsStandard,
  [CarrierId.UpsExpressSaver]: CarrierName.UpsExpressSaver,
  [CarrierId.Gls]: CarrierName.Gls,
  [CarrierId.Brt]: CarrierName.Brt,
} as const;
