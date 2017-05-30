import { Action } from 'redux'
import { isType } from 'typescript-fsa'

import QDrive from '../parts/QDrive'
import { ShipPart } from '../interfaces'
import { 
    makePlaceShipPartAction,
    makeUninstallPartAction
} from '../actions'


export const storageReducer = (state: ShipPart[] = [new QDrive()], action: Action): ShipPart[] => {
    if (isType(action, makePlaceShipPartAction)) {
        return state.filter(x => x !== action.payload.part)
    } else if (isType(action, makeUninstallPartAction)) {
        return [action.payload].concat(state)
    } else {
        return state
    }
}