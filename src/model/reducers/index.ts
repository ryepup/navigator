import { combineReducers } from 'redux'
import { State, Mission } from '../interfaces'
import { OtherAction } from '../actions'
import { shipReducer } from './shipReducer'
import { storageReducer } from './storageReducer'
import { uiReducer } from './uiReducer'

export const rootReducer = combineReducers<State>({
    ship: shipReducer,
    storage: storageReducer,
    completed: (state: Mission[] = [], action: OtherAction) => state,
    credits: (state: number = 10, action: OtherAction) => state,
    jobs: (state: Mission[] = [], action: OtherAction) => state,
    ui: uiReducer
})