import React from 'react';

const Navbar = () => (
  <nav
    style={{
      zIndex: '99',
      background: 'rgba(255,255,255,0.3)',
      boxShadow: '0px 1px 2px #dedede'
    }}
    className='navbar navbar-expand-lg navbar-light font-weight-bold fixed-top'
  >
    <a className='navbar-brand' href='/'>
      <img
        style={{ width: '100px', height: '100px' }}
        src='images/logo-clear.png'
        alt='trans4mation logo'
      />
    </a>
    <button
      className='navbar-toggler'
      type='button'
      data-toggle='collapse'
      data-target='#navbarSupportedContent'
      aria-controls='navbarSupportedContent'
      aria-expanded='false'
      aria-label='Toggle navigation'
    >
      <span className='navbar-toggler-icon'></span>
    </button>

    <div
      className='collapse navbar-collapse justify-content-end'
      id='navbarSupportedContent'
    >
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <a className='nav-link' href='#!'>
            About Us
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#!'>
            Vision
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#!'>
            Mission
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#!'>
            Values
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#!'>
            Resources
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#!'>
            G.E.M. University
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
