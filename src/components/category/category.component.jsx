import { useNavigate } from 'react-router-dom';
import './category.styles.scss'

const Category = ({ category }) => {
    const { title, imageUrl } = category;
    const navigate = useNavigate();
    const route = `/shop/${title.toLowerCase()}`;
    const categoryClickedHandler = () => navigate(route);

    return (<div className="category-container" onClick={categoryClickedHandler}>
        <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }}></div>
        <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
        </div>
    </div>

    )
};

export default Category;
