import { Fragment, useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categories.context";

const CategoriesPreview = () => {
    const { categories } = useContext(CategoriesContext);
    let products;

    return (
        <>
            {Object.keys(categories).map(category => {
                products = categories[category];
                return (
                    <Fragment key={category}>
                        <CategoryPreview title={category} products={products} />
                    </Fragment>)
            })}
        </>
    );
}

export default CategoriesPreview;
