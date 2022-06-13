import { useSelector } from "react-redux";
import Category from "../category/category.component";

import './categories.styles.scss'
import { selectCategoriesMap } from "../../redux/categories/categories.selector";

const Categories = () => {
    const categories = useSelector(selectCategoriesMap);
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
