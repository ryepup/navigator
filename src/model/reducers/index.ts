import { combineReducers, Action } from 'redux'
import { State, Mission } from '../interfaces'
import { shipReducer } from './shipReducer'
import { storageReducer } from './storageReducer'
import { uiReducer } from './uiReducer'

export const rootReducer = combineReducers<State>({
    ship: shipReducer,
    storage: storageReducer,
    completed: (state: Mission[] = [], action: Action) => state,
    credits: (state: number = 10, action: Action) => state,
    jobs: (state: Mission[] = [], action: Action) => state,
    ui: uiReducer
})