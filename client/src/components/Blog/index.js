import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Jumbotron from '../Jumbotron';

const Blog = (props) => {
	return (
		<Fragment>
			<Jumbotron
				title="G.E.Ms Blogs"
				subtitle={
					<Fragment>
						<strong>GRANDPARENTS IN COLUMBUS WELCOME TO G.E.Ms.</strong>
						<br />
						<strong>"GRAND" EDUCATION MIND'S</strong>
					</Fragment>
				}
			/>
			<div className="row mx-0 Donation-Row-1">
				<div className="col-12 py-0 text-center">
					<h3>Help Our Cause</h3>
					<p style={{ textTransform: 'uppercase' }}>
						TRANSFORMATIONNOW INC. IS GRATEFUL FOR YOUR GENEROSITY, AND MOST IMPORTANTLY YOUR COMMITMENT TO
						OUR MISSION ON SUPPORTING G.E.Ms. AS THEY CONTRIBUTE TO OUR NEXT GENERATION. YOUR DONATION HELPS
						US TO MEET OUR GOALS AND FUND OUR MISSION. THANK YOU! <br />
						<strong>
							Please note that your contribution is tax-deductible within the limits prescribed by law.
						</strong>
					</p>
				</div>
			</div>
		</Fragment>
	);
};

Blog.propTypes = {};

export default Blog;
