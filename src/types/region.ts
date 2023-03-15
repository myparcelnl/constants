// noinspection JSUnusedGlobalSymbols

export enum Region {
  Eu = 'EU',
  HomeCountry = 'Home Country',
  Row = 'ROW',
}

export type RegionType = `${Region}`;

export type RegionOrType = Region | RegionType;
