import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.util';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import './navigation-bar.styles.scss';

export const NavigationBar = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartDropdownVisible } = useContext(CartContext);

    return (
        <div className='navigation-bar-container'>
            <Link className='nav-link' to='/shop'>SHOP</Link>
            {currentUser ? (
                <div className='nav-link'>
                    Hi {currentUser.displayName} -
                    <span onClick={signOutUser}>SIGN OUT</span>
                </div>

            ) : (
                <Link className='nav-link' to='/auth'>SIGN IN</Link>
            )
            }
            <CartIcon />
            {isCartDropdownVisible && <CartDropdown />}
        </div>)
};
