import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({ item }) => {
    const { name, quantity, price, imageUrl } = item;
    const { removeItemFromCart, addItemToCart, clearItemFromCart } = useContext(CartContext);
    const increase = () => addItemToCart(item);
    const decrease = () => removeItemFromCart(item);
    const removeItem = () => clearItemFromCart(item);

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
