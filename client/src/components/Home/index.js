import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Landing from './Landing';
import './Home.css';
const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Landing />
    </Fragment>
  );
};

export default Home;
