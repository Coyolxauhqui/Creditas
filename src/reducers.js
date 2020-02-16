import { combineReducers } from 'redux'
import {
    CAMBIAR_TARJETA,
} from './actions'

function numero_tarejeta(state = '', action = CAMBIAR_TARJETA) {
    if (typeof state === 'undefined') {
        state = '################';
    }
    switch (action.type) {
        case CAMBIAR_TARJETA:
            return state
        default:
            return state
    }
}

const tarjetaApp = combineReducers({
    numero_tarejeta,
})
export default tarjetaApp