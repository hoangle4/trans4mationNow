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
                  <p className=''>Building Legacy Together</p>
                  <hr style={{ background: '#ffffff' }} className='' />
                  <br />
                  <a href='#!' className='teal-btn'>
                    Our Mission
                  </a>
                </div>
              </div>
              {/* ---------------Building */}
              <div className='carousel-item'>
                <div className='Landing_Img_Box_3'>
                  <div className='Landing_filter' />
                </div>

                <div className='carousel-caption d-none d-md-block'>
                  <h1>G.E.Ms University</h1>
                  <p className=''>Building Legacy Together</p>
                  <hr style={{ background: '#ffffff' }} className='' />
                  <br />
                  <a href='#!' className='teal-btn'>
                    Our Mission
                  </a>
                </div>
              </div>
              {/* ---------------Building */}
              <div className='carousel-item'>
                <div className='Landing_Img_Box_4'>
                  <div className='Landing_filter' />
                </div>

                <div className='carousel-caption d-none d-md-block'>
                  <h1>G.E.Ms University</h1>
                  <p className=''>Building Legacy Together</p>
                  <hr style={{ background: '#ffffff' }} className='' />
                  <br />
                  <a href='#!' className='teal-btn'>
                    Our Mission
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row p-0 m-0 Landing_Event'>
          <div className='col-12 my-5'>
            <h5 className='text-center'>Upcoming Events</h5>
          </div>
          <LandingEvents
            img='/images/adobe1.jpg'
            title='G.E.Ms University online sign-up – March 2020'
            desc='G.E.Ms University online sign-up.'
            date='March 2020'
          />
          <LandingEvents
            img='/images/adobe2.jpg'
            title='G.E.Ms University classes beginning September 2020'
            desc='G.E.Ms University classes beginning.'
            date='September 2020'
          />
          <LandingEvents
            img='/images/stock1.jpg'
            title='Ribbon Cutting Ceremony - September 2020'
            desc='Ribbon Cutting Ceremony.'
            date='September 2020'
          />
        </div>

        <div className='row m-0 p-0 Story_Row'>
          <div className='col-12 mt-5'>
            <h5 className='text-center'>Stories</h5>
          </div>
          <LandingStory />
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
