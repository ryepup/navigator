import { ShipPart } from './interfaces'

// TODO: try out https://www.npmjs.com/package/redux-typescript-actions

export type PLACE_SHIP_PART = 'PLACE_SHIP_PART'
export const PLACE_SHIP_PART: PLACE_SHIP_PART = 'PLACE_SHIP_PART'
export type PlaceShipPartAction = {
    type: PLACE_SHIP_PART,
    payload: {
        i: number,
        j: number,
        part: ShipPart
    }
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
    payload: ShipPart
}

export type CANCEL_SELECT_PART = 'CANCEL_SELECT_PART'
export const CANCEL_SELECT_PART: CANCEL_SELECT_PART = 'CANCEL_SELECT_PART'
export type CancelSelectPartAction = {
    type: CANCEL_SELECT_PART,
    payload: ShipPart
}

export type UNINSTALL_PART = 'UNINSTALL_PART'
export const UNINSTALL_PART: UNINSTALL_PART = 'UNINSTALL_PART'
export type UninstallPartAction = {
    type: UNINSTALL_PART,
    payload: ShipPart
}

export type OtherAction = { type: '' }
export const OtherAction: OtherAction = { type: '' }