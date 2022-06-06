import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import './category-preview.styles.scss';

const CategoryPreview = ({ title, products }) => {
    const titleClickedHandler = () => { }
    return (
        <div className="category-preview-container">
            <h2 >
                <span onClick={titleClickedHandler} className="title">
                    <Link className='nav-link' to={title}> {title.toLocaleUpperCase()}</Link>
                </span>
            </h2>
            <div className="preview">
                {products
                    .filter((_, idx) => idx < 4)
                    .map(product =>
                        <ProductCard key={product.id} product={product} />
                    )}
            </div>
        </div>
    );
}

export default CategoryPreview;
