import React, { Fragment, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Landing from './Landing';
import Testimonial from './Testimonial';
import Footer from './Footer';

import './Home.css';
const Home = () => {
  useEffect(() => {
    setLanding(document.querySelector('.Landing'));
    setNavbar(document.querySelector('.Navbar'));
    setNavbarLogo(document.querySelector('.Navbar_logo'));
  }, []);
  const [landing, setLanding] = useState();
  const [navbar, setNavbar] = useState();
  const [navbarLogo, setNavbarLogo] = useState();

  window.addEventListener('scroll', e => {
    if (landing) {
      if (landing.getBoundingClientRect().y !== 0) {
        navbar.style.background = 'rgba(7, 163, 178, 1)';
        navbar.style.color = '#eaf0e4';
        navbarLogo.style.width = '75px';
        navbarLogo.style.transform = 'translateX(25px)';
      } else {
        navbar.style.background = 'rgba(7, 163, 178, 0)';
        navbar.style.color = '#012225';
        navbarLogo.style.width = '50px';
        navbarLogo.style.transform = 'translateX(0)';
      }
    }
  });
  return (
    <Fragment>
      {/* <Navbar /> */}
      <Landing />
      <Testimonial />
      <Footer />
    </Fragment>
  );
};

export default Home;
