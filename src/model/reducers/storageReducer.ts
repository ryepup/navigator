import { reducerWithInitialState } from 'typescript-fsa-reducers'

import QDrive from '../parts/QDrive'
import { 
    makePlaceShipPartAction,
    makeUninstallPartAction
} from '../actions'


export const storageReducer = reducerWithInitialState([new QDrive()])
    .case(makeUninstallPartAction, (state, part) => [part].concat(state))
    .case(makePlaceShipPartAction, (state, placed) => state.filter(x => x !== placed.part))
    .build()
