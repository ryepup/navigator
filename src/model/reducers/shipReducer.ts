import { combineReducers, Action } from 'redux'
import { isType } from 'typescript-fsa'

import { InstalledPart, ShipPart } from '../interfaces'
import {
    makePlaceShipPartAction,
    makeUninstallPartAction
} from '../actions'

const removePart = (parts: InstalledPart[][], partToRemove: ShipPart) => {
    return parts.map(row => row.map(val => {
        return val === partToRemove ? undefined : val
    }))
}

const shipPartReducer = (state: InstalledPart[][] = [[], [], []], action: Action) => {
    if (isType(action, makePlaceShipPartAction)) {
        const { i, j, part } = action.payload
        const copy = removePart(state, part)
        copy[i][j] = part
        return copy
    } else if (isType(action, makeUninstallPartAction)) {
        return removePart(state, action.payload)
    } else {
        return state
    }
}

export const shipReducer = combineReducers({
    parts: shipPartReducer,
    height: (state: number = 3, action: Action) => state,
    width: (state: number = 3, action: Action) => state
})