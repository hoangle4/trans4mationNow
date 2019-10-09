import React from 'react';
import './Jumbotron.css';
const Jumbotron = ({ title, subtitle }) => (
  <div
    id='Jumbotron'
    className='jumbotron jumbotron-fluid'
    style={{
      background: 'url(/images/2019-10-02.jpg) no-repeat center',
      backgroundSize: 'cover'
    }}
  >
    <div className='container'>
      <h1 className='mt-5 pt-5'>{title}</h1>
      <p className='lead'>{subtitle}</p>
    </div>
  </div>
);

export default Jumbotron;
