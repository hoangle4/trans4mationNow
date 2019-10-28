import React, { Fragment } from 'react';
import Jumbotron from '../Jumbotron';
import { Link } from 'react-router-dom';
import './GEM.css';
const GEMsUniversity = () => {
  return (
    <Fragment>
      <div className='row m-0'>
        <div className='col-12 p-0'>
          <Jumbotron
            title='WELCOME TO G.E.Ms University'
            subtitle={
              <Fragment>
                <strong>Learn how to become a member</strong>
                <br />
                <strong>"Adopt" a gem family</strong>
              </Fragment>
            }
          />
        </div>
      </div>
      <div className='row m-0 Survey-Row'>
        <div className='col-8 p-0 mx-auto'>
          <h3>BECOME A MEMBER</h3>
          <p className='mb-5'>
            As members, you can enroll in GEM's University classes all youth are
            accompanied by their guardian/grandparent. All are welcome to
            participate. Classes will be offered you plenty to do while you
            enjoy each other's company. Get ready for some activities and enjoy
            the fun and relationship.
          </p>
          <h3>MEMBERSHIP FEES:</h3>
          <p style={{ fontStyle: 'italic' }}>January 2020, to January 2021</p>
          <h5>
            Grandparent/Guardian Member w/ Children up to 4 youth - $10.00/Year.
          </h5>
          <ul className='GEMs-List'>
            <li className=''>Profile on website - Family profile.</li>
            <li className=''>Access to GEMs University.</li>
            <li className=''>Attend one family course with youth.</li>
            <li className=''>Participate in one event.</li>
          </ul>
          <h5>Professional Member – $25.00/Year.</h5>
          <ul className='GEMs-List'>
            <li className=''>Promotion on TFN social media.</li>
            <li className=''>Exposure on our webpage.</li>
            <li className=''>Recognition at ribbon cutting event.</li>
          </ul>
          <h5>"ADOPT A GEM Family" Supporting Member - $500.00/Year.</h5>
          <ul className='GEMs-List'>
            <li className=''>Your story on our website .</li>
            <li className=''>
              Adopt a Grandparent/Guardian and children - 1 paid membership to
              sponsor a family.
            </li>
            <li className=''>Featured events & News.</li>
            <li className=''>2 Free T-shirts.</li>
            <li className=''>Promotion for your events.</li>
            <li className=''>Facebook Recognition.</li>
          </ul>
          <hr />
          <ul className='GEMs-List mt-5'>
            <li className='text-center'>
              <Link to='/gems-signup' className='Donation_Button p-3'>
                Become a Member Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default GEMsUniversity;
