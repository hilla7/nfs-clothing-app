import { createSelector } from 'reselect';
import { calculateCount, calculateTotal } from '../../utils/cart-crud/cart-crud.util';

const selectCartReducer = state => state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cartSlice) => cartSlice.cartItems
);

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cartSlice) => cartSlice.isCartOpen
);

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) => {
        return calculateCount(cartItems)
    }
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => {
        return calculateTotal(cartItems)
    }
);
