
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import {thunk} from 'redux-thunk'
import { authReducer } from '../State/Auth/Reducer'
import { customerProductReducer } from '../State/Product/Reducer'
import { cartReducer } from '../State/Cart/Reducer'
import { orderReducer } from '../State/Order/Reducer'

const rootReducers = combineReducers({
    auth: authReducer,
    product: customerProductReducer,
    cart: cartReducer,
    order: orderReducer
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))
