import React from 'react';

const Donation = () => {
	return (
		<div className='container'>
			<div className='row justify-content-center'>
				<div className='col-6 text-center'>
					<h5>Transformation Now Inc.</h5>
					<small className='text-muted'>GRANDPARENTS IN COLUMBUS WELCOME TO G.E.M.S.</small>
					<p>
						<strong>"GRAND" EDUCATION MIND'S</strong>
					</p>
				</div>
			</div>
			<div className='row'>
				<div className='col-12 text-center'>
					<h3>Help Our Cause</h3>
					<p>
						TRANSFORMATIONNOW INC. IS GRATEFUL FOR YOUR GENEROSITY, AND MOST IMPORTANTLY YOUR COMMITMENT TO
						OUR MISSION ON SUPPORTING G.E.M.S. AS THEY CONTRIBUTE TO OUR NEXT GENERATION. YOUR DONATION
						HELPS US TO MEET OUR GOALS AND FUND OUR MISSION. THANK YOU!
					</p>
					<form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'>
						<input type='hidden' name='cmd' value='_donations' />
						<input type='hidden' name='business' value='gems@tfnow.org' />
						<input type='hidden' name='currency_code' value='USD' />
						<input type='hidden' name='item_name' value='Trans4mation Now Presenting G.E.M.S' />
						<input type='hidden' name='return' value='https://trans4mationnow.org/donation' />
						<input type='hidden' name='cancel_return' value='https://trans4mationnow.org/donation' />
						<input type='hidden' name='cbt' value='Return to TRANS4MATION NOW' />
						<input
							type='image'
							src='https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif'
							border='0'
							name='submit'
							title='PayPal - The safer, easier way to pay online!'
							alt='Donate with PayPal button'
						/>
						<img
							alt=''
							border='0'
							src='https://www.paypal.com/en_US/i/scr/pixel.gif'
							width='1'
							height='1'
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Donation;
