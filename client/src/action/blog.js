import axios from 'axios';
import { setAlert } from './alert';

import { GET_BLOG, BLOG_ERROR, GET_BLOGS } from './types';

/**
 * 
 */
export const getBlogs = () => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-type': 'application/json'
			}
		};
		const result = await axios.get('/api/blog', config);
		dispatch({ type: GET_BLOGS, payload: result.data });
	} catch (error) {
		const errors = error.response.data.errors;

		if (errors) {
			errors.forEach((err) => dispatch(setAlert(err.msg, 'negative')));
		}
		dispatch({
			type: BLOG_ERROR,
			payload: {
				msg: error.response.data.msg,
				status: error.response.status
			}
		});
	}
};

/**
 * 
 * @param {Object} formData 
 */
export const createBlog = (formData) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-type': 'application/json'
			}
		};

		const result = await axios.post('/api/blog', formData, config);
		dispatch({ type: GET_BLOG, payload: result.data });
		dispatch(setAlert('Blog created', 'success'));
	} catch (error) {
		const errors = error.response.data.errors;

		if (errors) {
			errors.forEach((err) => dispatch(setAlert(err.msg, 'negative')));
		}
		dispatch({
			type: BLOG_ERROR,
			payload: {
				msg: error.response.data.msg,
				status: error.response.status
			}
		});
	}
};

/**
 * 
 * @param {Object} photo 
 */
export const uploadPhoto = (photo) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-type': 'application/json'
			}
		};

		const result = await axios.post('/api/blog/upload', photo, config);
		return result.path;
	} catch (error) {
		const errors = error.response.data.errors;

		if (errors) {
			errors.forEach((err) => dispatch(setAlert(err.msg, 'negative')));
		}
		dispatch({
			type: BLOG_ERROR,
			payload: {
				msg: error.response.data.msg,
				status: error.response.status
			}
		});
	}
};
