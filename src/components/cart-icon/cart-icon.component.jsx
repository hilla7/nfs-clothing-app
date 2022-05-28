import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const CartIcon = () => {

  const { isCartDropdownVisible, setIsCartDropdownVisible } = useContext(CartContext);
  const toggleDropdownVisibility = () => {
    setIsCartDropdownVisible(!isCartDropdownVisible);
  }
  return (
    <div className='cart-icon-container' onClick={toggleDropdownVisibility} >
      <ShoppingIcon className="shopping-icon" />
      <span className='item-count'>0</span>
    </div>
  );
};

export default CartIcon;
