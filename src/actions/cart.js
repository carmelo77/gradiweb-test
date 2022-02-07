

export const addProductToCart = ( product ) => {
    return {
        type: 'ADD_PRODUCT_IN_CART',
        payload: {
            product
        }
    }
}