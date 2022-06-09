import { Fragment } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { setCategories } from "../../redux/categories/categories.action";

const CategoriesPreview = () => {
    const categories = useSelector(setCategories);

    let products;

    return (
        <>
            {Object.keys(categories).map(category => {
                products = categories[category]?.items;
                return (
                    <Fragment key={category}>
                        <CategoryPreview title={category} products={products} />
                    </Fragment>)
            })}
        </>
    );
}

export default CategoriesPreview;
