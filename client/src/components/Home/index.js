import React, { Fragment, useEffect } from 'react';
import Navbar from './Navbar';
import Landing from './Landing';
import Testimonial from './Testimonial';

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
		</Fragment>
	);
};

export default Home;
