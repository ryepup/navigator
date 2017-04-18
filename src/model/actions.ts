import { ShipPart } from './interfaces'

export type PLACE_SHIP_PART = 'PLACE_SHIP_PART';
export const PLACE_SHIP_PART: PLACE_SHIP_PART = 'PLACE_SHIP_PART';

export type PlaceShipPartAction = {
    type: PLACE_SHIP_PART,
    i: number,
    j: number,
    part: ShipPart
};

export type OtherAction = { type: '' };
export const OtherAction: OtherAction = { type: '' };