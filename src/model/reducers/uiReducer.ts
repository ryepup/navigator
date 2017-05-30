import { combineReducers } from 'redux'

import { SelectedPart } from '../interfaces'
import {
    SelectStoragePartAction, SELECT_STORAGE_PART,
    SelectShipPartAction, SELECT_SHIP_PART,
    CancelSelectPartAction, CANCEL_SELECT_PART,
    PlaceShipPartAction, PLACE_SHIP_PART,
    UninstallPartAction, UNINSTALL_PART,
    OtherAction
} from '../actions'

type StorageActions = SelectStoragePartAction | SelectShipPartAction 
    | CancelSelectPartAction | PlaceShipPartAction 
    | UninstallPartAction | OtherAction
export const selectedShipPartReducer = (state: SelectedPart|null = null, action: StorageActions): SelectedPart|null => {
    switch (action.type) {
        case SELECT_STORAGE_PART:
            return { part: action.payload, isInstalled: false}
        case SELECT_SHIP_PART:
            return { part: action.payload, isInstalled: true}
        case PLACE_SHIP_PART:
        case CANCEL_SELECT_PART:
        case UNINSTALL_PART:
            return null
        default:
            return state
    }
}

export const uiReducer = combineReducers({
    selectedPart: selectedShipPartReducer
})