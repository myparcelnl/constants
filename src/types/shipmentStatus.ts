// noinspection JSUnusedGlobalSymbols

/** @see https://myparcelnl.github.io/api/#shipment_status */
export enum ShipmentStatus {
  PendingConcept = 1,
  PendingRegistered = 2,
  EnRouteHandedToCarrier = 3,
  EnRouteSorting = 4,
  EnRouteDistribution = 5,
  EnRouteCustoms = 6,
  DeliveredAtRecipient = 7,
  DeliveredReadyForPickup = 8,
  DeliveredPackagePickedUp = 9,
  DeliveredReturnShipmentReadyForPickup = 10,
  DeliveredReturnShipmentPackagePickedUp = 11,
  PrintedLetter = 12,
  InactiveCredited = 13,
  PrintedDigitalStamp = 14,
  InactiveConcept = 30,
  InactiveRegistered = 31,
  InactiveEnRouteHandedToCarrier = 32,
  InactiveEnRouteSorting = 33,
  InactiveEnRouteDistribution = 34,
  InactiveEnRouteCustoms = 35,
  InactiveDeliveredAtRecipient = 36,
  InactiveDeliveredReadyForPickup = 37,
  InactiveDeliveredPackagePickedUp = 38,
}

export const SHIPMENT_STATUS_PENDING = [ShipmentStatus.PendingConcept, ShipmentStatus.PendingRegistered] as const;

export const SHIPMENT_STATUS_EN_ROUTE = [
  ShipmentStatus.EnRouteHandedToCarrier,
  ShipmentStatus.EnRouteSorting,
  ShipmentStatus.EnRouteDistribution,
  ShipmentStatus.EnRouteCustoms,
] as const;

export const SHIPMENT_STATUS_DELIVERED = [
  ShipmentStatus.DeliveredAtRecipient,
  ShipmentStatus.DeliveredReadyForPickup,
  ShipmentStatus.DeliveredPackagePickedUp,
  ShipmentStatus.DeliveredReturnShipmentReadyForPickup,
  ShipmentStatus.DeliveredReturnShipmentPackagePickedUp,
] as const;

export const SHIPMENT_STATUS_PRINTED = [ShipmentStatus.PrintedLetter, ShipmentStatus.PrintedDigitalStamp] as const;

export const SHIPMENT_STATUS_INACTIVE = [
  ShipmentStatus.InactiveCredited,
  ShipmentStatus.InactiveConcept,
  ShipmentStatus.InactiveRegistered,
  ShipmentStatus.InactiveEnRouteHandedToCarrier,
  ShipmentStatus.InactiveEnRouteSorting,
  ShipmentStatus.InactiveEnRouteDistribution,
  ShipmentStatus.InactiveEnRouteCustoms,
  ShipmentStatus.InactiveDeliveredAtRecipient,
  ShipmentStatus.InactiveDeliveredReadyForPickup,
  ShipmentStatus.InactiveDeliveredPackagePickedUp,
] as const;
