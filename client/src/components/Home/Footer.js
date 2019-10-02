import React from 'react';

const Footer = () => {
  return (
    <div className='row mx-0 Footer'>
      <div className='col-12 p-0'>
        <div className='row mx-0 border-bottom mb-5'>
          <div className='col-md-6 col-xs-12 p-0'>
            <h5>Contact Us</h5>
            <ul className='Footer_UL'>
              <li>
                <strong>Address</strong>
              </li>
              <li>P.O. Box 422</li>
              <li>Brice, Ohio 43109</li>
            </ul>
            <ul className='Footer_UL'>
              <li>
                <strong>Phone</strong>
              </li>
              <li>614 924 0007</li>
              <li>614 924 0007</li>
            </ul>
            <ul className='Footer_UL'>
              <li>
                <strong>Email</strong>
              </li>
              <li>gems@tfnow.org</li>
              <li>gems@trans4mationnow.org</li>
            </ul>
          </div>
          <div className='col-md-6 col-xs-12 p-0'>
            <h5>Send Us Message</h5>
            <form className='p-3'>
              <div className='form-group'>
                <div className='form-group'>
                  <label htmlFor='inputName'>Name</label>
                  <input
                    type='text'
                    className='form-control'
                    id='inputName'
                    placeholder='Enter name'
                  />
                </div>
                <label htmlFor='InputEmail'>Email address</label>
                <input
                  type='email'
                  className='form-control'
                  id='InputEmail'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                />
                <small id='emailHelp' className='form-text'>
                  We'll never share your email with anyone else.
                </small>
                <label htmlFor='InputMessage'> Message</label>
                <textarea
                  type='text'
                  className='form-control'
                  id='InputMessage'
                  aria-describedby='emailHelp'
                  placeholder='Enter message'
                />
              </div>

              <div className='form-group form-check'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='check'
                />
                <label className='form-check-label' htmlFor='check'>
                  Subscribe to our newsletters.
                </label>
              </div>
              <button type='submit' className='green-btn'>
                Send
              </button>
            </form>
          </div>
        </div>
        <div className='row mx-0'>
          <div className='col-md-3 col-xs-6 p-0'>
            <ul className='Footer_UL'>
              <li>
                <strong>About Us</strong>
              </li>
              <li>How it works</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className='col-md-3 col-xs-6 p-0'>
            <ul className='Footer_UL'>
              <li>
                <strong>Information</strong>
              </li>
              <li>FAQs</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className='col-md-3 col-xs-6 p-0'>
            <ul className='Footer_UL'>
              <li>
                <strong>Policy</strong>
              </li>
              <li>Privacy</li>
              <li>What we shared</li>
            </ul>
          </div>

          <div className='col-md-3 col-xs-6 p-0'>
            <ul className='Footer_UL'>
              <li>
                <strong>Connect with Us</strong>
              </li>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>

          <div className='col-12 p-0'>
            <blockquote>
              {' '}
              @copyright 2019 - Transformation Now .Inc | All Right Reserved
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
