import { createContext, useReducer } from "react";
import { addCartItem, calculateCount, calculateTotal, clearCartItem, removeCartItem } from "../utils/cart-crud/cart-crud.util";
import { createAction } from "../utils/reducer/reducer.util";

export const CartContext = createContext({
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
    setIsCartOpen: () => null,
    addItemToCart: () => null,
    removeItemFromCart: () => null,
    clearItemFromCart: () => null,
});

const CART_ACTION_TYPE = {
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS',
}

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPE.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload,
            }
        case CART_ACTION_TYPE.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            }
        default:
            throw new Error(`unhandled action ${type} in cartReducer`);
    }
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
}

export const CartProvider = ({ children }) => {

    const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const setIsCartOpen = (isOpen) => {
        dispatch(createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, isOpen));
    }

    const addItemToCart = (productToAdd) => {
        updateCartItemsReducer(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (productToRemove) => {
        updateCartItemsReducer(removeCartItem(cartItems, productToRemove));
    }

    const clearItemFromCart = (productToClear) => {
        updateCartItemsReducer(clearCartItem(cartItems, productToClear));
    }

    const updateCartItemsReducer = (newCartItems) => {
        dispatch(createAction(CART_ACTION_TYPE.SET_CART_ITEMS, {
            cartItems: newCartItems,
            cartCount: calculateCount(newCartItems),
            cartTotal: calculateTotal(newCartItems),
        }))
    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        cartCount,
        cartTotal,
    };


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
