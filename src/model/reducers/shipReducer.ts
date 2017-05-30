import { combineReducers } from 'redux'
import { InstalledPart } from '../interfaces'
import { 
    PlaceShipPartAction, PLACE_SHIP_PART,
    UninstallPartAction, UNINSTALL_PART,
    OtherAction 
} from '../actions'

type ShipPartActions = PlaceShipPartAction | UninstallPartAction | OtherAction
const shipPartReducer = (state: InstalledPart[][] = [[], [], []], action: ShipPartActions) => {
    switch (action.type) {
        case PLACE_SHIP_PART:
            const {i, j, part} = action.payload
            const copy = state.map(row => row.map(val => {
                return val === part ? undefined : val
            }))
            copy[i][j] = part
            return copy
        case UNINSTALL_PART:
            return state.map(row => row.map(val => {
                return val === action.payload ? undefined : val
            }))
        default:
            return state
    }
}



export const shipReducer = combineReducers({
    parts: shipPartReducer,
    height: (state: number = 3, action: OtherAction) => state,
    width: (state: number = 3, action: OtherAction) => state
})