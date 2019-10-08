import React, { Fragment } from 'react';
import Landing from './Landing';
import Testimonial from './Testimonial';

import './Home.css';
const Home = () => {
	return (
		<Fragment>
			{/* <Navbar /> */}
			<Landing />
			<Testimonial />
		</Fragment>
	);
};

export default Home;
