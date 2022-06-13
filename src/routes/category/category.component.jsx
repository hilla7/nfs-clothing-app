import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoriesMap } from "../../redux/categories/categories.selector";

import './category.styles.scss';

const Category = () => {

    const { category } = useParams();
    const categories = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categories[category]?.items);

    useEffect(() => {
        setProducts(categories[category]?.items);
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
