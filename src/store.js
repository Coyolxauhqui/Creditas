import { createStore } from 'redux'
import tarjetaApp from './reducers'
const store = createStore(tarjetaApp)
export default store;