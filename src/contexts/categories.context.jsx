import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.util.js";

// the actual value you want to access.
export const CategoriesContext = createContext({
    categories: {}
});

export const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState({});
    const value = { categories };

    useEffect(() => {
        const fetchData = async () => {
            const categories = await getCategoriesAndDocuments();
            setCategories(categories);
        };

        fetchData();
    }, []);

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>

}
