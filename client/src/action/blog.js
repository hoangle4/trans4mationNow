import axios from 'axios';
import { setAlert } from './alert';

import { GET_BLOG, BLOG_ERROR } from './types';

/**
 * 
 * @param {Object} formData 
 * @param {Function} history 
 * @param {Boolean} edit 
 */
export const createBlog = (formData, history, edit = false) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-type': 'application/json'
			}
		};
		const result = await axios.post('/api/blog', formData, config);
		dispatch({ type: GET_BLOG, payload: result.data });
		dispatch(setAlert(`${edit ? 'Profile updated' : 'Profile created'}`, 'success'));

		if (!edit) {
			history.push('/blog');
		}
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
