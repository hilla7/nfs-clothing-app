import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from "../../redux/cart/cart.action";
import { selectCartItems } from '../../redux/cart/cart.selector';
import Button from "../button/button.component";
import './product-card.styles.scss'

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const { name, imageUrl, price } = product;
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add To Cart</Button>
        </div>
    );
};
export default ProductCard;
