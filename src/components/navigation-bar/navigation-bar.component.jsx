import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.util';
import './navigation-bar.styles.scss';

export const NavigationBar = () => {
    const { currentUser } = useContext(UserContext);

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
        </div>)
};
