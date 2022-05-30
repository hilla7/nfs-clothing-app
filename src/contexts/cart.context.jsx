import { createContext, useEffect, useState } from "react";


const addCartItem = (cartItems, productToAdd) => {
    let existingItem = cartItems.find(item => item.id === productToAdd.id);

    if (existingItem) {
        existingItem.quantity++;
        return [...cartItems];
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

export const CartContext = createContext({
    isCartDropdownVisible: false,
    setIsCartDropdownVisible: () => null,
    cartItems: [],
    addItemToCart: () => null,
    cartCount: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartDropdownVisible, setIsCartDropdownVisible] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const calculateCartCount = () => {
        const count = cartItems.reduce((total, currentItem) => total += currentItem.quantity, 0);
        console.log('count:', count)
        setCartCount(count);
    }
    useEffect(calculateCartCount, [cartItems]);

    const value = {
        isCartDropdownVisible,
        setIsCartDropdownVisible,
        cartItems,
        addItemToCart,
        cartCount
    };


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
