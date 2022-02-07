const shopping_cart = JSON.parse(localStorage.getItem('shoppingCartGW')) || [];

export const CartReducer = (state = shopping_cart, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_IN_CART':
            if(state.length == 0) {
                state = [ ...state, action.payload.product ];
            } else {
                let find = state.findIndex( val => val.id == action.payload.product.id && val.size == action.payload.product.size );
                if(find == -1) {
                    state = [ ...state, action.payload.product ];
                } else {
                    state[find].qty = state[find].qty + action.payload.product.qty;
                    state = [ ...state ];
                }
            }

            localStorage.setItem('shoppingCartGW', JSON.stringify(state) );

            return state;

        default: 
            return state;
    }
}