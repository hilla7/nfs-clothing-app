import { addCartItem, clearCartItem, removeCartItem } from "../../utils/cart-crud/cart-crud.util";
import { createAction } from "../../utils/reducer/reducer.util";
import { CART_ACTION_TYPE } from "./cart.types";

export const setIsCartOpen = (isOpen) => (
    createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, isOpen));

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
}

export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
}

export const clearItemFromCart = (cartItems, productToClear) => {
    const newCartItems = clearCartItem(cartItems, productToClear);
    return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
}
