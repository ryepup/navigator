import { ShipPart } from './interfaces'
import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory()

export const makeSelectStoragePartAction = actionCreator<ShipPart>('SELECT_STORAGE_PART')
export const makeSelectShipPartAction = actionCreator<ShipPart>('SELECT_SHIP_PART')
export const makeCancelSelectPartAction = actionCreator<ShipPart>('CANCEL_SELECT_PART')
export const makeUninstallPartAction = actionCreator<ShipPart>('UNINSTALL_PART')

export const makePlaceShipPartAction = actionCreator<{
        i: number,
        j: number,
        part: ShipPart
    }>('PLACE_SHIP_PART')
