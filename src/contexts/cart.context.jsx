import { createContext, useEffect, useState } from "react";


const addCartItem = (cartItems, productToAdd) => {
    const existingItem = cartItems.find(item => item.id === productToAdd.id);

    if (existingItem) {
        return cartItems.map(item => item.id === productToAdd.id ?
            { ...item, quantity: item.quantity + 1 } : item)
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, productToRemove) => {

    const existingItem = cartItems.find(item => item.id === productToRemove.id);

    if (existingItem && existingItem.quantity > 1) {
        return cartItems.map(item => item.id === productToRemove.id ?
            { ...item, quantity: item.quantity - 1 } : item)
    }

    return cartItems.filter(item => item.id !== productToRemove.id);
}

const clearCartItem = (cartItems, productToRemove) => {
    return cartItems.filter(item => item.id !== productToRemove.id);
}

export const CartContext = createContext({
    isCartDropdownVisible: false,
    setIsCartDropdownVisible: () => null,
    cartItems: [],
    addItemToCart: () => null,
    removeItemFromCart: () => null,
    clearItemFromCart: () => null,
    cartCount: 0,
    cartTotal: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartDropdownVisible, setIsCartDropdownVisible] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const clearItemFromCart = (productToClear) => {
        setCartItems(clearCartItem(cartItems, productToClear));
    }

    const calculateCartCount = () => {
        const count = cartItems.reduce((total, currentItem) => total += currentItem.quantity, 0);
        setCartCount(count);
    }

    const calculateCartTotal = () => {
        const total = cartItems.reduce((total, currentItem) => total += (currentItem.quantity * currentItem.price), 0);
        setCartTotal(total);
    }

    useEffect(calculateCartCount, [cartItems]);
    useEffect(calculateCartTotal, [cartItems]);

    const value = {
        isCartDropdownVisible,
        setIsCartDropdownVisible,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        cartCount,
        cartTotal,
    };


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
