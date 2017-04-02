import { createStore, Action } from 'redux'
import { State } from './interfaces'

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
    storage: [],
    completed: [],
    credits: 10,
    jobs: []
}

const reducer = (state: State = INITIAL_STATE, action: Action) => state

const store = createStore<State>(reducer)

export default store