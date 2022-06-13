import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { signOutUser } from '../../utils/firebase/firebase.util';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectIsCartOpen } from '../../redux/cart/cart.selector';

import './navigation-bar.styles.scss';

export const NavigationBar = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

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
            {isCartOpen && <CartDropdown />}
        </div>)
};
