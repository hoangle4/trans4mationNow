import React, { Fragment } from 'react';
import Jumbotron from '../Jumbotron';
import './About-Us.css';
const AboutUs = () => {
  return (
    <div className='row m-0 About-Us-Row'>
      <div className='col-12 p-0'>
        <Jumbotron
          title='About GEMS'
          subtitle={
            <Fragment>
              <strong>GRANDPARENTS IN COLUMBUS WELCOME TO G.E.M.S.</strong>
              <br />
              <strong>"GRAND" EDUCATION MIND'S</strong>
            </Fragment>
          }
        />
      </div>
      <div className='col-12 my-5 py-5 '>
        <div className='row About-Us-Nested-Row'>
          <div className='col-md-3 col-xs-12'>
            <h5 className='my-5'>Welcome to G.E.M.S</h5>
          </div>
          <div className='col-md-8 col-xs-12'>
            <p className='card-text'>
              TransformationNow is a faith-based, non-profit organization that
              offers a program called “G.E.M.S” GRAND Mother’s, GRAND Fathers
              and GRAND Mentor’s Educating Mind’s. Our program is designed to
              help the younger generation recognize their personal strengths and
              identity through the assistance and leadership of their G.E.M.S.
              TransformationNow is going back to the basics “It takes a village
              to raise a child. “African Proverb”
            </p>
          </div>
        </div>
      </div>
      <div className='col-12  my-5 py-5'>
        <div className='row About-Us-Nested-Row'>
          <div className='col-md-3 col-xs-12'>
            <h5 className='my-5'>G.E.M.S. INVESTMENT</h5>
          </div>
          <div className='col-md-8 col-xs-12'>
            <p className='card-text'>
              TransformationNow recognizes the wisdom and experiences of
              G.E.M.S. who can make a difference in creating wise and creative
              leaders. This celebrated "GRAND" is imparting knowledge to the
              younger making impact in a personal and participatory investment
              giving memories for a lifetime.
            </p>
          </div>
        </div>
      </div>
      <div className='col-12  my-5 py-5'>
        <div className='row About-Us-Nested-Row'>
          <div className='col-md-3 col-xs-12'>
            <h5 className='my-5'>TRANS4MATION THAT EMPOWERS!!!</h5>
          </div>
          <div className='col-md-8 col-xs-12'>
            <p className='card-text'>
              G.E.M.S. interaction with designed activities that aid in
              relationship development through mentored styled leadership is the
              formula for the life transformed.
            </p>
          </div>
        </div>
      </div>

      {/* ----------------- */}
      <div className='col-12  my-5 py-5'>
        <div className='row About-Us-Nested-Row'>
          <div className='col-md-4 col-xs-12 p-0 px-2'>
            <h5 className='my-5 text-center'>HISTORY</h5>

            <p className='card-text'>
              About Us: TransformationNow Inc. is a faith-based, 501c3 that was
              formed in 2012, as a Community Outreach primarily to serve as a
              conduit turning those of aged skills, experiences and resources to
              advantages for the younger.
            </p>
          </div>
          <div className='col-md-4 col-xs-12 p-0 px-2'>
            <h5 className='my-5 text-center'>PURPOSE</h5>

            <p className='card-text'>
              We are building a legacy that strengthens generational connection
              that transforms lives.
            </p>
          </div>
          <div className='col-md-4 col-xs-12 p-0 px-2'>
            <h5 className='my-5 text-center'>G.E.M.S BY DEFINITION</h5>

            <p className='card-text'>
              G -Grand E - Educate M - Mind Whether you are a "GRAND" Father,
              "GRAND" Mother or "GRAND" Mentor you are valuable and priceless.
              As a G.E.M.S., you have given the wealth of time, given loving
              care to family and given personal and professional advice. "GRAND"
              your life is a living document that engulfs influence, guidance,
              encouragement and means. Being who you are as “GRAND” will have a
              long lasting effect that impacts our future generations. You are a
              GEM!!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
