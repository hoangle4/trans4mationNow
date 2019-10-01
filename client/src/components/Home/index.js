import React, { Fragment, useEffect } from 'react';
import Navbar from './Navbar';
import Landing from './Landing';
import Testimonial from './Testimonial';
import Footer from './Footer';

import './Home.css';
import Utils from '../utils';
const Home = () => {
	useEffect(() => {
		Utils.test();
	}, []);
	return (
		<Fragment>
			<Navbar />
			<Landing />
			<Testimonial />
			<Footer />
		</Fragment>
	);
};

export default Home;
