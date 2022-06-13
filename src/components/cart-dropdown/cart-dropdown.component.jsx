import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { setIsCartOpen } from '../../redux/cart/cart.action';


const CartDropdown = () => {

  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    dispatch(setIsCartOpen(false));
    navigate('/checkout');
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {
          cartItems.length ?
            cartItems.map(item => <CartItem key={item.id} item={item} />) :
            <span> Your cart is empty </span>
        }
      </div>
      <Button onClick={goToCheckoutHandler}> GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
