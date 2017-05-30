import { createStore } from 'redux'
import { State } from './interfaces'
import { rootReducer } from './reducers'


const store = createStore<State>(
    rootReducer, 
    window['__REDUX_DEVTOOLS_EXTENSION__'] 
        && window['__REDUX_DEVTOOLS_EXTENSION__']());

export default store