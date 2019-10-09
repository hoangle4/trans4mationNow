import React from 'react';

const EventList = ({
  imgLink,
  title,
  eventType,
  eventDesc,
  eventDate,
  eventId
}) => (
  <div className='row m-0'>
    <div className='col-md-4 col-xs-12 p-0 pr-3 py-5 border-bottom'>
      <div
        className='Event_Img_Container'
        style={{
          background: `url(${imgLink}) no-repeat center`,
          backgroundSize: 'cover',
          height: '200px'
        }}
      ></div>
    </div>
    <div className='col-md-8 col-xs-12 p-0 py-5 border-bottom'>
      <h5>{title}</h5>
      <small className='text-muted'>{eventType}</small>
      <p>{eventDesc}</p>
      <p>
        <strong>{eventDate}</strong>
      </p>
      <button className='teal-btn'>Sign Up</button>
    </div>
  </div>
);

export default EventList;
