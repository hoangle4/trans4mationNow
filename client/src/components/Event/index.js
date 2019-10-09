import React, { Fragment } from 'react';
import Jumbotron from '../Jumbotron';
import './Event.css';
import EventList from './EventList';
const Event = () => {
  return (
    <Fragment>
      <div className='row mx-0'>
        <div className='col-12 px-0'>
          <Jumbotron
            title='UP COMMING EVENTS'
            subtitle='EVENTS PAGE AND CALENDAR'
          />
        </div>
      </div>
      <div className='row mx-0 Event_Container'>
        <div className='col-12'>
          <div className='container'>
            <EventList
              imgLink='/images/adobe3.jpg'
              title='The Great Reveal TFN website - November 2019'
              eventType='Public'
              eventDesc='The Great Reveal TFN website.'
              eventDate='November 2019'
              eventId='112019'
            />
            <EventList
              imgLink='/images/adobe1.jpg'
              title='GEMS University online sign-up – March 2020'
              eventType='Public'
              eventDesc='GEMS University online sign-up.'
              eventDate='March 2020'
              eventId='032020'
            />
            <EventList
              imgLink='/images/adobe2.jpg'
              title='GEMS University classes beginning September 2020'
              eventType='Private'
              eventDesc='GEMS University classes beginning.'
              eventDate='September 2020'
              eventId='092020'
            />

            <EventList
              imgLink='/images/stock1.jpg'
              title='Ribbon Cutting Ceremony - September 2020'
              eventType='Public'
              eventDesc='Ribbon Cutting Ceremony.'
              eventDate='September 2020'
              eventId='092020'
            />

            <EventList
              imgLink='/images/stock2.jpg'
              title='Fun - 2K Walk - Fundraiser 2021'
              eventType='Public'
              eventDesc='Fun - 2K Walk.'
              eventDate='2021'
              eventId='092021'
            />
            <EventList
              imgLink='/images/stock3.jpg'
              title='GEMS-GRAND-Ball 2021'
              eventType='Public'
              eventDesc='GEMS-GRAND-Ball.'
              eventDate='2021'
              eventId='092021'
            />
            <EventList
              imgLink='/images/stock4.jpg'
              title='Up-Next Gathering 2022'
              eventType='Public'
              eventDesc='Up-Next Gathering.'
              eventDate='2022'
              eventId='092022'
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Event;
