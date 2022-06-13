import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../redux/cart/cart.action';
import { selectCartItems } from '../../redux/cart/cart.selector';
import './checkout-item.styles.scss';

const CheckoutItem = ({ item }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const { name, quantity, price, imageUrl } = item;

    const increase = () => dispatch(addItemToCart(cartItems, item));
    const decrease = () => dispatch(removeItemFromCart(cartItems, item));
    const removeItem = () => dispatch(clearItemFromCart(cartItems, item));

    return (
        <div className="checkout-item-container">
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <span className='arrow' onClick={decrease}> &#10094; </span>
                <span className='value'>{quantity}</span>
                <span className='arrow' onClick={increase}> &#10095; </span>
            </span>
            <span className="price">${price}</span>
            <span className='remove-button' onClick={removeItem}>&#10006;</span>
        </div>
    );
}

export default CheckoutItem;
