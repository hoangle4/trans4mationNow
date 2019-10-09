import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Utils from './components/utils';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Navbar from './components/Home/Navbar';
import Footer from './components/Home/Footer';
import Event from './components/Event';
import AboutUs from './components/AboutUs';
import Donation from './components/Donation';

const App = () => {
	useEffect(() => {
		Utils.NavBarAnimation();
	}, []);

	return (
		<div className='container'>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path={'/'} component={Home} />
					<Route exact path={'/contactus'} component={ContactUs} />
					<Route exact path={'/event'} component={Event} />
					<Route exact path={'/aboutus'} component={AboutUs} />
					<Route exact path={'/donation'} component={Donation} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
};

export default App;
