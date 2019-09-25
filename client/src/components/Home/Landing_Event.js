import React from 'react';

const Landing_Event = ({ img, title, desc, date }) => (
  <div className='col-xs-12 col-md-4 p-0 m-0'>
    <div className='card bg-dark text-white border-0'>
      <img className='card-img' src={img} alt='transformation events' />
      <div
        className='card-img-overlay'
        style={{ background: 'rgba(0,0,0,0.6)' }}
      >
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{desc}</p>
        <p className='card-text'>
          {date}{' '}
          <span>
            <button className='btn btn-primary'> Learn More</button>
          </span>
        </p>
      </div>
    </div>
  </div>
);

export default Landing_Event;
