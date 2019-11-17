import React from 'react';
import TestimonialItem from './TestimonialItem';
const Testimonial = () => {
  return (
    <div className='row mx-0 mb-5 '>
      <div className='col-12 p-0' style={{ overflow: 'hidden' }}>
        <h5
          style={{
            position: 'relative',
            top: '20%',
            textAlign: 'center',
            zIndex: '10'
          }}
        >
          Testimonials
        </h5>
        <div
          id='carouselCaptions'
          className='carousel slide'
          data-ride='carousel'
        >
          <ol className='carousel-indicators'>
            <li
              data-target='#carouselCaptions'
              data-slide-to='0'
              className='active'
            />
            <li data-target='#carouselCaptions' data-slide-to='1' />
            <li data-target='#carouselCaptions' data-slide-to='2' />
            <li data-target='#carouselCaptions' data-slide-to='3' />
          </ol>
          <div className='carousel-inner'>
            <TestimonialItem
              name='Crystal D. Turner'
              img=''
              story='Crystal Turner is a Columbus, Ohio based COmmunity leader and speaker who transformed the untimely and tragic death of her children into a movement to helpt others cope, heal, and find hope after turmoil. She is the 2019 African Americans Committee Inc " COMMUNITY SERVICe" recipient, 2018 Clumbus CARE Coalition "RESILIENCE" Award recipient, and 2018 The Cincinnati Herald & MAO Brand " Werking Women Honoree" '
              active='active'
              slideClass='Testimonial_Slide_Left'
            />
            <TestimonialItem
              name='Christina Tatum'
              img=''
              story='You are not only an inspiration tome, but to the world! May God continue to give you strength as you help other parents cope with the loss of their children. Otc-2018'
              active=''
              slideClass='Testimonial_Slide_Right'
            />
          </div>

          <a
            className='carousel-control-prev'
            href='#carouselCaptions'
            role='button'
            data-slide='prev'
          >
            <span className='carousel-control-prev-icon' aria-hidden='true' />
            <span className='sr-only'>Previous</span>
          </a>
          <a
            className='carousel-control-next'
            href='#carouselCaptions'
            role='button'
            data-slide='next'
          >
            <span className='carousel-control-next-icon' aria-hidden='true' />
            <span className='sr-only'>Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
