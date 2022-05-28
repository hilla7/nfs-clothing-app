import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartDropdownVisible: false,
    setIsCartDropdownVisible: () => null
});

export const CartProvider = ({ children }) => {

    const [isCartDropdownVisible, setIsCartDropdownVisible] = useState(false);
    const value = { isCartDropdownVisible, setIsCartDropdownVisible };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
