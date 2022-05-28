import { createContext, useEffect, useState } from "react";
import products from '../assets/data/products.data.json';

const getMockedProducts = () => Promise.resolve(products);

// the actual value you want to access.
export const ProductsContext = createContext({
    products: []
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const value = { products };

    useEffect(() => async () => {
        const receivedProducts = await getMockedProducts();
        setProducts(receivedProducts);
    }, []);
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>

}
