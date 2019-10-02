import React from 'react';

const Landing_Event = ({ img, title, desc, date }) => (
  <div className='col-xs-12 col-md-4 p-0 m-0'>
    <div className='row Landing_Event'>
      <div className='col-md-5 col-xs-12'>
        <img src={img} className='card-img' alt='event' />
      </div>
      <div className='col-md-7 col-xs-12'>
        <div className='p-2'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{desc}</p>
          <p className='card-text'>
            {date}{' '}
            <span>
              <button className='btn btn-primary btn-xs'> Learn More</button>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Landing_Event;
