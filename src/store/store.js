import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/** Reducers */
import { CartReducer } from '../reducers/CartReducer';

const reducers = combineReducers({
    cart: CartReducer
});

export const store = createStore(
    reducers,

    applyMiddleware( thunk )
);