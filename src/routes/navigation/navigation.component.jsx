import './navigation.styles.scss'
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header.component';

const Navigation = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}
export default Navigation;
