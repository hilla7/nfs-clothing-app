export const addCartItem = (cartItems, productToAdd) => {
    const existingItem = cartItems.find(item => item.id === productToAdd.id);

    if (existingItem) {
        return cartItems.map(item => item.id === productToAdd.id ?
            { ...item, quantity: item.quantity + 1 } : item)
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

export const removeCartItem = (cartItems, productToRemove) => {

    const existingItem = cartItems.find(item => item.id === productToRemove.id);

    if (existingItem && existingItem.quantity > 1) {
        return cartItems.map(item => item.id === productToRemove.id ?
            { ...item, quantity: item.quantity - 1 } : item)
    }

    return cartItems.filter(item => item.id !== productToRemove.id);
}

export const clearCartItem = (cartItems, productToRemove) => {
    return cartItems.filter(item => item.id !== productToRemove.id);
}

export const calculateTotal = (cartItems) => {
    return cartItems.reduce((total, currentItem) => total += (currentItem.quantity * currentItem.price), 0);
}

export const calculateCount = (cartItems) => {
    return cartItems.reduce((total, currentItem) => total += currentItem.quantity, 0);
}
