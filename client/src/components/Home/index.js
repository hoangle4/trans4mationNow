import React, { Fragment, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Landing from './Landing';
import Testimonial from './Testimonial';
import Footer from './Footer';

import './Home.css';
import Utils from '../utils';
const Home = () => {
	useEffect(() => {
		setLanding(document.querySelector('.Landing'));
		setNavbar(document.querySelector('.Navbar'));
	}, []);
	const [ landing, setLanding ] = useState();
	const [ navbar, setNavbar ] = useState();

	window.addEventListener('scroll', (e) => {
		if (landing) {
			if (landing.getBoundingClientRect().y !== 0) {
				navbar.style.background = 'rgba(217, 236, 199, 1)';
			} else {
				navbar.style.background = 'rgba(217, 236, 199, 0)';
			}
		}
	});
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
