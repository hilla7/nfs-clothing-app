import { CART_ACTION_TYPE } from "./cart.types";

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPE.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload,
            }
        case CART_ACTION_TYPE.SET_CART_ITEMS:
            const newState = {
                ...state,
                cartItems: payload,
            };
            return newState;
        default:
            return state;
    }
}
