import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Utils from './components/utils';
import Home from './components/Home';
import Navbar from './components/Home/Navbar';
import Footer from './components/Home/Footer';
import Event from './components/Event';
import AboutUs from './components/AboutUs';
import Donation from './components/Donation';
import Blog from './components/Blog';
import Resources from './components/Resources';
import Survey from './components/Survey';
import GEMsUniversity from './components/GEMsUniversity';
import GemForm from './components/GEMsUniversity/GemForm';
const App = () => {
	useEffect(() => {
		Utils.NavBarAnimation();
	}, []);

	return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path={'/'} component={Home} />
					<Route exact path={'/event'} component={Event} />
					<Route exact path={'/aboutus'} component={AboutUs} />
					<Route exact path={'/donation'} component={Donation} />
					<Route exact path={'/resources'} component={Resources} />
					<Route exact path={'/survey'} component={Survey} />
					<Route exact path={'/gems'} component={GEMsUniversity} />
					<Route exact path={'/gems-signup'} component={GemForm} />
					<Route exact path={'/blog'} component={Blog} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
};

export default App;
