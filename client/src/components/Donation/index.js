import React, { Fragment } from 'react';
import Jumbotron from '../Jumbotron';
import './Donation.css';
const Donation = () => {
  return (
    <Fragment>
      <Jumbotron
        title='Transformation Now Inc.'
        subtitle={
          <Fragment>
            <strong>GRANDPARENTS IN COLUMBUS WELCOME TO G.E.M.S.</strong>
            <br />
            <strong>"GRAND" EDUCATION MIND'S</strong>
          </Fragment>
        }
      />
      <div className='row mx-0 Donation-Row-1'>
        <div className='col-12 py-0 text-center'>
          <h3>Help Our Cause</h3>
          <p style={{ textTransform: 'uppercase' }}>
            TRANSFORMATIONNOW INC. IS GRATEFUL FOR YOUR GENEROSITY, AND MOST
            IMPORTANTLY YOUR COMMITMENT TO OUR MISSION ON SUPPORTING G.E.M.S. AS
            THEY CONTRIBUTE TO OUR NEXT GENERATION. YOUR DONATION HELPS US TO
            MEET OUR GOALS AND FUND OUR MISSION. THANK YOU! <br />
            <strong>
              Please note that your contribution is tax-deductible within the
              limits prescribed by law.
            </strong>
          </p>
          <form
            action='https://www.paypal.com/cgi-bin/webscr'
            method='post'
            target='_top'
          >
            <input type='hidden' name='cmd' value='_donations' />
            <input type='hidden' name='business' value='gems@tfnow.org' />
            <input type='hidden' name='currency_code' value='USD' />
            <input
              type='hidden'
              name='item_name'
              value='Trans4mation Now Presenting G.E.M.S'
            />
            <input
              type='hidden'
              name='return'
              value='https://trans4mationnow.org/donation'
            />
            <input
              type='hidden'
              name='cancel_return'
              value='https://trans4mationnow.org/donation'
            />
            <input
              type='hidden'
              name='cbt'
              value='Return to TRANS4MATION NOW'
            />
            <button className='btn Donation_Button'>
              <img
                type='image'
                src='https://www.paypalobjects.com/webstatic/icon/pp258.png'
                title='PayPal - The safer, easier way to pay online!'
                alt='Donate with PayPal button'
              />
              Make Donation
            </button>
            <br />
            <img
              className='Donation_Accept_Img'
              src='https://www.paypalobjects.com/webstatic/en_US/i/buttons/cc-badges-ppmcvdam.png'
              alt='Transformation Now Donation'
            />
          </form>
        </div>
      </div>
      <div className='row mx-0 Donation-Row-2'>
        <div className='col-12 py-0 text-center'>
          <h5>BETTER YET, SEE US IN PERSON!</h5>
          <p>
            Get Involved in Columbus! We love our G.E.M.S, to feel free to
            contact us during normal business hours.
          </p>

          <address>
            TRANSFORMATIONNOW <br />
            1561 Old Leonard Ave <br />
            Columbus, OH 43219
          </address>
        </div>
      </div>
    </Fragment>
  );
};

export default Donation;
