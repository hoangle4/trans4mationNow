import React from 'react';

const Footer = () => {
	return (
		<div className='row mx-0'>
			<div className='col-12 p-0'>
				<div className='row mx-0'>
					<div className='col-md-6 col-xs-12 p-0'>
						<h5>Contact Us</h5>
						<ul>
							<li>
								<strong>Address</strong>
							</li>
							<li>P.O. Box 422</li>
							<li>Brice, Ohio 43109</li>
						</ul>
						<ul>
							<li>
								<strong>Phone</strong>
							</li>
							<li>614 924 0007</li>
							<li>614 924 0007</li>
						</ul>
						<ul>
							<li>
								<strong>Email</strong>
							</li>
							<li>gems@tfnow.org</li>
							<li>gems@trans4mationnow.org</li>
						</ul>
					</div>
					<div className='col-md-6 col-xs-12 p-0'>
						<h5>Send Us Message</h5>
						<form>
							<div class='form-group'>
								<label for='InputEmail'>Email address</label>
								<input
									type='email'
									class='form-control'
									id='InputEmail'
									aria-describedby='emailHelp'
									placeholder='Enter email'
								/>
								<small id='emailHelp' class='form-text text-muted'>
									We'll never share your email with anyone else.
								</small>
							</div>
							<div class='form-group'>
								<label for='inputName'>Name</label>
								<input type='text' class='form-control' id='inputName' placeholder='Enter name' />
							</div>
							<div class='form-group form-check'>
								<input type='checkbox' class='form-check-input' id='exampleCheck1' />
								<label class='form-check-label' for='exampleCheck1'>
									Check me out
								</label>
							</div>
							<button type='submit' class='btn btn-primary'>
								Submit
							</button>
						</form>
					</div>
				</div>
				<div className='row mx-0'>
					<div className='col-md-3 col-xs-6 p-0'>About Us</div>
					<div className='col-md-3 col-xs-6 p-0'>Information</div>

					<div className='col-md-3 col-xs-6 p-0'>Policy</div>

					<div className='col-md-3 col-xs-6 p-0'>Connect with Us</div>

					<div className='col-12 p-0'>
						<blockquote> @copyright 2019 - Transformation Now .Inc | All Right Reserved</blockquote>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
