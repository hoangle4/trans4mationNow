import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Utils from './components/utils';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Navbar from './components/Home/Navbar';
import Footer from './components/Home/Footer';

import Event from './components/Event';
import AboutUs from './components/AboutUs';

const App = () => {
	useEffect(() => {
		Utils.NavBarAnimation();
	}, []);

	return (
		<div className='container'>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path={'/'} render={() => <Home />} />
					<Route exact path={'/contactus'} render={() => <ContactUs />} />
					<Route exact path={'/event'} render={() => <Event />} />
					<Route exact path={'/aboutus'} render={() => <AboutUs />} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
};

export default App;
