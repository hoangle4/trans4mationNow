import React, { Fragment } from 'react';
import LandingEvents from './Landing_Event';
import LandingStory from './LandingStory';

const Landing = () => {
	return (
		<Fragment>
			<div className='row p-0 m-0 Landing'>
				<div className='col-12 p-0 m-0' style={{ height: '100vh' }}>
					<div className='Landing_Img_Box_2'>
						<div className='Landing_filter'>
							<h4 className='Landing_h4'>Transformation Now</h4>
							<p className='Landing_p'>
								Building Legacy Together
								<br />
								<a
									href='#!'
									className='Landing_btn btn btn-primary'
									style={{ color: '#D7D6D6', textShadow: 'none' }}
								>
									Our Mission
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='row p-0 m-0 mb-5'>
				<div className='col-12 my-5'>
					<h5 className='text-center'>Our Upcomming Events</h5>
				</div>
				<LandingEvents
					img='./images/stock2.jpg'
					title='Event 2'
					desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque architecto error, fuga labore corrupti inventore dolorem consectetur corporis itaque laudantium?'
					date='20-10-2020'
				/>
				<LandingEvents
					img='./images/stock3.jpg'
					title='Event 3'
					desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque architecto error, fuga labore corrupti inventore dolorem consectetur corporis itaque laudantium?'
					date='20-10-2020'
				/>
				<LandingEvents
					img='./images/stock4.jpg'
					title='Event 1'
					desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque architecto error, fuga labore corrupti inventore dolorem consectetur corporis itaque laudantium?'
					date='20-10-2020'
				/>
			</div>
			<div className='row m-0 p-0 mt-5'>
				<LandingStory />
			</div>
		</Fragment>
	);
};

export default Landing;
