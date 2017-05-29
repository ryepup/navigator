import { ShipPart } from './interfaces'
type PlacedShipPart = {
    i: number,
    j: number,
    part: ShipPart
}

export type PLACE_SHIP_PART = 'PLACE_SHIP_PART'
export const PLACE_SHIP_PART: PLACE_SHIP_PART = 'PLACE_SHIP_PART'
export type PlaceShipPartAction = {
    type: PLACE_SHIP_PART,
    i: number,
    j: number,
    part: ShipPart
}

export type SELECT_STORAGE_PART = 'SELECT_STORAGE_PART'
export const SELECT_STORAGE_PART: SELECT_STORAGE_PART = 'SELECT_STORAGE_PART'
export type SelectStoragePartAction = {
    type: SELECT_STORAGE_PART,
    payload: ShipPart
}

export type SELECT_SHIP_PART = 'SELECT_SHIP_PART'
export const SELECT_SHIP_PART: SELECT_SHIP_PART = 'SELECT_SHIP_PART'
export type SelectShipPartAction = {
    type: SELECT_SHIP_PART,
    payload: PlacedShipPart
}

export type OtherAction = { type: '' }
export const OtherAction: OtherAction = { type: '' }