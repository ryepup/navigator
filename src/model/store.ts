import { createStore, combineReducers } from 'redux'
import { State, InstalledPart, ShipPart, Mission } from './interfaces'
import QDrive from './parts/QDrive'
import { PlaceShipPartAction, OtherAction, PLACE_SHIP_PART } from './actions'

const INITIAL_STATE: State = {
    ship: {
        height: 3,
        width: 3,
        parts: [
            [],
            [],
            []
        ]
    },
    storage: [new QDrive()],
    completed: [],
    credits: 10,
    jobs: []
}

type ShipPartActions = PlaceShipPartAction | OtherAction
const shipPartReducer = (state: InstalledPart[][] = INITIAL_STATE.ship.parts, action: ShipPartActions) => {
    switch (action.type) {
        case PLACE_SHIP_PART:
            const copy = state.map(row => row.map(val => val))
            copy[action.i][action.j] = action.part
            return copy
        default:
            return state
    }
}


type StorageActions = PlaceShipPartAction | OtherAction
const storageReducer = (state: ShipPart[] = INITIAL_STATE.storage, action: StorageActions) => {
    switch (action.type) {
        case PLACE_SHIP_PART:
            return state.filter(x => x !== action.part)
        default:
            return state
    }
}

const rootReducer = combineReducers<State>({
    ship: combineReducers({
        parts: shipPartReducer,
        height: (state: number = INITIAL_STATE.ship.height, action: OtherAction) => state,
        width: (state: number = INITIAL_STATE.ship.width, action: OtherAction) => state
    }),
    storage: storageReducer,
    completed: (state: Mission[] = INITIAL_STATE.completed, action: OtherAction) => state,
    credits: (state: number = INITIAL_STATE.credits, action: OtherAction) => state,
    jobs: (state: Mission[] = INITIAL_STATE.jobs, action: OtherAction) => state,
})
const store = createStore<State>(rootReducer);

export default store