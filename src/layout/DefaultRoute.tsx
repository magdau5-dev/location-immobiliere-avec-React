import { Outlet } from 'react-router-dom';
import Footer from '../navigation/Footer';
import Header from '../navigation/Header';

const DefaultRoute = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default DefaultRoute;
