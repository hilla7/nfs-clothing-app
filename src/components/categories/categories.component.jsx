import { useContext } from "react";
import Category from "../category/category.component";
import { CategoriesContext } from "../../contexts/categories.context";

import './categories.styles.scss'

const Categories = () => {
    const { categories } = useContext(CategoriesContext);
    return (
        <div className="categories-container">
            {Object.keys(categories).map(categoryKey => {
                const category = categories[categoryKey];
                return < Category key={category.id} category={category} />
            })}

        </div>
    )
};

export default Categories;
