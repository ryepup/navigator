import QDrive from '../parts/QDrive'
import { ShipPart } from '../interfaces'
import { 
    PlaceShipPartAction, PLACE_SHIP_PART,
    UninstallPartAction, UNINSTALL_PART,
    OtherAction
} from '../actions'

type StorageActions = PlaceShipPartAction | UninstallPartAction | OtherAction
export const storageReducer = (state: ShipPart[] = [new QDrive()], action: StorageActions): ShipPart[] => {
    switch (action.type) {
        case PLACE_SHIP_PART:
            return state.filter(x => x !== action.payload.part)
        case UNINSTALL_PART:
            return [action.payload].concat(state)
        default:
            return state
    }
}