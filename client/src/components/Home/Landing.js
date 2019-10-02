import React, { Fragment } from 'react';
import LandingEvents from './Landing_Event';
import LandingStory from './LandingStory';

const Landing = () => {
  return (
    <Fragment>
      <div className='row p-0 m-0 Landing'>
        <div className='col-12 p-0 m-0'>
          <div
            id='carouselLanding'
            className='carousel slide'
            data-ride='carousel'
          >
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <div className='Landing_Img_Box_2'>
                  <div className='Landing_filter' />
                </div>

                <div className='carousel-caption d-none d-md-block'>
                  <h1>Transformation Now</h1>
                  <p>Building Legacy Together</p>
                  <a
                    href='#!'
                    className='Landing_btn btn btn-primary'
                    style={{ color: '#D7D6D6', textShadow: 'none' }}
                  >
                    Our Mission
                  </a>
                </div>
              </div>
              {/* ---------------Building */}
              <div className='carousel-item'>
                <div className='Landing_Img_Box_2'>
                  <div className='Landing_filter' />
                </div>

                <div className='carousel-caption d-none d-md-block'>
                  <h1>G.E.M.s University</h1>
                  <p>Building Legacy Together</p>
                  <a
                    href='#!'
                    className='Landing_btn btn btn-primary'
                    style={{ color: '#D7D6D6', textShadow: 'none' }}
                  >
                    Our Mission
                  </a>
                </div>
              </div>
              {/* ---------------Building */}
              <div className='carousel-item'>
                <div className='Landing_Img_Box_2'>
                  <div className='Landing_filter' />
                </div>

                <div className='carousel-caption d-none d-md-block'>
                  <h1>G.E.M.s University</h1>
                  <p>Building Legacy Together</p>
                  <a
                    href='#!'
                    className='Landing_btn btn btn-primary'
                    style={{ color: '#D7D6D6', textShadow: 'none' }}
                  >
                    Our Mission
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row p-0 m-0 mb-5'>
        <div className='col-12 my-5'>
          <h5 className='text-center'>Our Upcomming Events</h5>
        </div>
        <LandingEvents
          img='./images/stock2.jpg'
          title='Event 2'
          desc='Lorem ipsum dolor sit amet...'
          date='20-10-2020'
        />
        <LandingEvents
          img='./images/stock3.jpg'
          title='Event 3'
          desc='Lorem ipsum dolor sit amet.... '
          date='20-10-2020'
        />
        <LandingEvents
          img='./images/stock4.jpg'
          title='Event 1'
          desc='Lorem ipsum dolor sit amet...'
          date='20-10-2020'
        />
      </div>
      <div className='row m-0 p-0 mt-5'>
        <LandingStory />
      </div>
    </Fragment>
  );
};

export default Landing;
