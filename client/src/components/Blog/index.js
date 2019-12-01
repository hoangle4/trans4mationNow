import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Jumbotron from '../Jumbotron';
import BlogItem from './BlogItem';

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
				<div className="col-md-8 py-0 mx-auto text-center">
					<h1>G.E.Ms Blogs</h1>
				</div>
			</div>

			<div className="row mx-0 Donation-Row-1">
				<div className="col-md-8 py-0 mx-auto">
					<BlogItem />
				</div>
			</div>
		</Fragment>
	);
};

Blog.propTypes = {};

export default Blog;
