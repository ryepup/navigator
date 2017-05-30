import { combineReducers, Action } from 'redux'
import { isType } from 'typescript-fsa'

import { SelectedPart } from '../interfaces'
import {
    makeCancelSelectPartAction,
    makePlaceShipPartAction,
    makeUninstallPartAction,
    makeSelectShipPartAction,
    makeSelectStoragePartAction
} from '../actions'

export const selectedShipPartReducer = (state: SelectedPart | null = null, action: Action): SelectedPart | null => {
    if (isType(action, makeSelectStoragePartAction)) {
        return { part: action.payload, isInstalled: false }
    } else if (isType(action, makeSelectShipPartAction)) {
        return { part: action.payload, isInstalled: true }
    } else if (
        isType(action, makePlaceShipPartAction)
        || isType(action, makeCancelSelectPartAction)
        || isType(action, makeUninstallPartAction)
    ) {
        return null
    } else {
        return state
    }
}

export const uiReducer = combineReducers({
    selectedPart: selectedShipPartReducer
})