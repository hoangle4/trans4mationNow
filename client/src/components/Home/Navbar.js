import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => (
	<nav className='Navbar navbar navbar-expand-lg navbar-light font-weight-bold fixed-top'>
		<a className='navbar-brand' href='/'>
			<img src='images/logo-clear.png' alt='trans4mation logo' className='Navbar_logo' />
		</a>
		<h5 className='Navbar_h5'>G.E.M.s University</h5>
		<button
			className='navbar-toggler'
			type='button'
			data-toggle='collapse'
			data-target='#navbarSupportedContent'
			aria-controls='navbarSupportedContent'
			aria-expanded='false'
			aria-label='Toggle navigation'
		>
			<span className='navbar-toggler-icon' />
		</button>

		<div className='collapse navbar-collapse justify-content-end' id='navbarSupportedContent'>
			<ul className='navbar-nav'>
				<li className='nav-item'>
					<a className='nav-link' href='/aboutus'>
						About Us
					</a>
				</li>

				<li className='nav-item'>
					<a className='nav-link' href='#!'>
						Resources
					</a>
				</li>
				<li className='nav-item'>
					<a className='nav-link' href='#!'>
						Get Involved
					</a>
				</li>
				<li className='nav-item'>
					<Link className='nav-link' to='/event'>
						Events
					</Link>
				</li>
				<li className='nav-item'>
					<a className='nav-link' href='#!'>
						Donations
					</a>
				</li>
				<li className='nav-item'>
					<a className='nav-link' href='/contactus'>
						Contact Us
					</a>
				</li>
			</ul>
		</div>
	</nav>
);

export default Navbar;
