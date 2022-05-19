import categories from '../../assets/data/categories.data.json';
import Categories from '../../components/categories/categories.component';

const Home = () => {
    return (<Categories categories={categories} />);
}

export default Home;
