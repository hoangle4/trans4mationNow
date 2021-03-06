import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => (
	<nav className="Navbar navbar navbar-expand-lg navbar-light font-weight-bold fixed-top">
		<Link className="navbar-brand" to="/">
			<img src="images/logo-clear.png" alt="trans4mation logo" className="Navbar_logo" />
		</Link>

		<button
			className="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span className="navbar-toggler-icon" />
		</button>

		<div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link className="nav-link" to="/">
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/gems" className="nav-link">
						G.E.Ms University
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/aboutus">
						About Us
					</Link>
				</li>

				<li className="nav-item">
					<Link className="nav-link" to="/resources">
						Resources
					</Link>
				</li>

				<li className="nav-item">
					<Link className="nav-link" to="/event">
						Events
					</Link>
				</li>

				<li className="nav-item">
					<Link className="nav-link" to="/donation">
						Donations
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/blog">
						Blog
					</Link>
				</li>
			</ul>
		</div>
	</nav>
);

export default Navbar;
