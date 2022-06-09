import { useSelector } from "react-redux";
import Category from "../category/category.component";

import './categories.styles.scss'
import { selectCategories } from "../../redux/categories/categories.selector";

const Categories = () => {
    const categories = useSelector(selectCategories);
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
