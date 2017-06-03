import { reducerWithInitialState } from 'typescript-fsa-reducers'

import { Ui } from '../interfaces'
import {
    makeCancelSelectPartAction,
    makePlaceShipPartAction,
    makeUninstallPartAction,
    makeSelectShipPartAction,
    makeSelectStoragePartAction
} from '../actions'


const initialUi: Ui = {}

export const uiReducer = reducerWithInitialState(initialUi)
    .case(makeSelectStoragePartAction, (state, part) => {
        return {...state, selectedPart: { part, isInstalled: false }}
    })
    .case(makeSelectShipPartAction, (state, part) => {
        return {...state, selectedPart: { part, isInstalled: true }}
    })
    .case(makePlaceShipPartAction, (state, part) => {
        return {...state, selectedPart: undefined}
    })
    .case(makeCancelSelectPartAction, (state, part) => {
        return {...state, selectedPart: undefined}
    })
    .case(makeUninstallPartAction, (state, part) => {
        return {...state, selectedPart: undefined}
    })
    .build()