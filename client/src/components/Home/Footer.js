import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='row mx-0 Footer'>
      <div className='col-12 p-0'>
        <div className='row mx-0 border-bottom mb-5'>
          <div className='col-md-6 col-xs-12 p-0'>
            <h3>Contact Us</h3>
            <ul className='Footer_UL'>
              <li className='Footer-li'>
                <strong>Address</strong>
              </li>
              <li className='Footer-li'>P.O. Box 422</li>
              <li className='Footer-li'>Brice, Ohio 43109</li>
            </ul>
            <ul className='Footer_UL'>
              <li className='Footer-li'>
                <strong>Phone</strong>
              </li>
              <li className='Footer-li'>
                <a href='tel:6149240007' className=''>
                  Phone: 614 924 0007
                </a>
              </li>
              <li className='Footer-li'>
                <a href='fax:6145751919' className=''>
                  Fax: 614 575 1919
                </a>
              </li>
            </ul>
            <ul className='Footer_UL'>
              <li className='Footer-li'>
                <strong>Email</strong>
              </li>
              <li className='Footer-li'>
                <a href='mailto:gems@tfnow.org'>gems@tfnow.org</a>
              </li>
              <li className='Footer-li'>
                <a href='mailto:gems@trans4mationnow.org'>
                  gems@trans4mationnow.org
                </a>
              </li>
            </ul>
          </div>
          <div className='col-md-6 col-xs-12 p-0'>
            <div className='row '>
              <div className='col-md-6 p-0'>
                <h3>Send Us a Message</h3>
              </div>
              <div className='col-md-6 p-0 text-center'>
                <ul className='list-group'>
                  <li className='list-group-item bg-transparent border-0'>
                    <Link to='/survey' className='green-btn'>
                      Take a Survey!
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
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
              <li className='Footer-li'>
                <strong>About Us</strong>
              </li>
              <li className='Footer-li'>How it works</li>
              <li className='Footer-li'>Blog</li>
            </ul>
          </div>
          <div className='col-md-3 col-xs-6 p-0'>
            <ul className='Footer_UL'>
              <li className='Footer-li'>
                <strong>Information</strong>
              </li>
              <li className='Footer-li'>FAQs</li>
              <li className='Footer-li'>Terms & Conditions</li>
            </ul>
          </div>

          <div className='col-md-3 col-xs-6 p-0'>
            <ul className='Footer_UL'>
              <li className='Footer-li'>
                <strong>Policy</strong>
              </li>
              <li className='Footer-li'>Privacy</li>
              <li className='Footer-li'>What we shared</li>
            </ul>
          </div>

          <div className='col-md-3 col-xs-6 p-0'>
            <ul className='Footer_UL'>
              <li className='Footer-li'>
                <strong>Connect with Us</strong>
              </li>
              <li className='Footer-li'>Instagram</li>
              <li className='Footer-li'>Facebook</li>
              <li className='Footer-li'>Twitter</li>
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
