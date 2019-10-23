import React from 'react';
import { Link } from 'react-router-dom';
const Landing_Event = ({ img, title, desc, date }) => (
  <div className='col-xs-12 col-md-4 m-0 Event_Col'>
    <div className='row m-0'>
      <div className='col-md-12 col-xs-12 p-0'>
        <img src={img} className='card-img' alt='event' />
      </div>
      <div className='col-md-12 col-xs-12 p-0'>
        <div className='p-2'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>
            {desc}{' '}
            <Link className='text-primary' to='/event'>
              learn more
            </Link>{' '}
          </p>
          <p className='card-text'>{date} </p>
        </div>
      </div>
    </div>
  </div>
);

export default Landing_Event;
