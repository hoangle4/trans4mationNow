import React from 'react';
import PropTypes from 'prop-types';

const TestimonialItem = ({ name, img, story, active, slideClass }) => {
  return (
    <div className={`carousel-item ${active}`}>
      <div className={slideClass} />
      <div className='carousel-caption d-md-block'>
        <div className='Testimonial_card'>
          <img src={img} alt={name} />
        </div>
        <h5>{name} </h5>
        <p>{story}</p>
      </div>
    </div>
  );
};

TestimonialItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  story: PropTypes.string.isRequired,
  active: PropTypes.string,
  slideClass: PropTypes.string.isRequired
};

export default TestimonialItem;
