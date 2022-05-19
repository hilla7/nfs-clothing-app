import { Link } from 'react-router-dom';
import logo from '../../assets/images/closet.jpeg';
import './header.styles.scss'
// import { ReactComponent as Logo } from '../../assets/images/crown.svg';
import { NavigationBar } from '../navigation-bar/navigation-bar.component';

const Header = () => {
    return (
        <div className="header-container">
            <div className="background-image" style={{
                backgroundImage: `url(${logo})`
            }}></div>
            <div className="header-body-container">
                <Link className='nav-link' to='/'>
                    <div className='title-container'>
                        <div className='logo'>
                            {/* <Logo /> */}

                        </div>
                        <h2 className='title-content'>NFS Clothing</h2>
                    </div>
                </Link>
                <NavigationBar />
            </div>
        </div>
    );
}
export default Header;


