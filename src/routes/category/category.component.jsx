import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";

import './category.styles.scss';

const Category = () => {

    const { category } = useParams();
    const { categories } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categories[category]);

    useEffect(() => {
        setProducts(categories[category]);
    }, [categories, category]);

    return (
        <div className="category-page-container">
            <h2 className="title">{category.toLocaleUpperCase()}</h2>
            <div className="category-page-body">
                {
                    products &&
                    products.map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
}

export default Category;
