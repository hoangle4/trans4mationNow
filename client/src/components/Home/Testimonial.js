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
            <TestimonialItem
              name='Nocole Brown-Horston'
              img=''
              story={`We have friends in Ohio who are making strides in the laws and support that is given to families who are impacted. Mrs. Crystal Turner is one of them. Her videos share her human side which many forget that there long after the rime has been committed. Please use her story to educate your circle of influence of the great perils of gun violence. The strength it took to make this video for each of us to glean information to help our families makes me most proud. Proud to be associated with a women who has made a decision to speak for voiceless, forgive even when it hurts and fight for change for those who will never know the magnitude of what you've been through to accomplish this feat `}
              active=''
              slideClass='Testimonial_Slide_Left'
            />
            <TestimonialItem
              name='Carol CJ Jefferson'
              img=''
              story={`Gods knows what you need just when you need it. Great day today being with parents of murdered children and it feels really good to be around others who understand what it really feels like when our children had to go the way that they did. We are supporting each other. Crystal is truly a God sent as she opens up her home we can cry, eat, vent, and just encourage each other. It was a good day and I am thanking God Crystal Turner's vision as we continue to support each other`}
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
