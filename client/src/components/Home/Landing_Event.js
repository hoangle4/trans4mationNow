import React from 'react';

const Landing_Event = ({ img, title, desc, date }) => (
  <div className='col-xs-12 col-md-4 p-0 m-0'>
    <div className='row Landing_Event m-0'>
      <div className='col-md-5 col-xs-12 p-0'>
        <img src={img} className='card-img' alt='event' />
      </div>
      <div className='col-md-7 col-xs-12 p-0'>
        <div className='p-2'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>
            {desc} <a href='/'>learn more</a>{' '}
          </p>
          <p className='card-text'>{date} </p>
        </div>
      </div>
    </div>
  </div>
);

export default Landing_Event;
