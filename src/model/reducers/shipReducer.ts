import { combineReducers, Action } from 'redux'
import { reducerWithInitialState } from 'typescript-fsa-reducers'

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

const initialParts: InstalledPart[][] = [[], [], []]

const shipPartReducer = reducerWithInitialState(initialParts)
    .case(makePlaceShipPartAction, (state, placed) => {
        const { i, j, part } = placed
        const copy = removePart(state, part)
        copy[i][j] = part
        return copy
    })
    .case(makeUninstallPartAction, removePart)
    .build()

export const shipReducer = combineReducers({
    parts: shipPartReducer,
    height: (state: number = 3, action: Action) => state,
    width: (state: number = 3, action: Action) => state
})