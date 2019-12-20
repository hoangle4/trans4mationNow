import { GET_BLOG, GET_BLOGS, BLOG_ERROR } from '../action/types';
const initialState = {
	blog: null,
	blogs: [],
	loading: true,
	error: {}
};

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case GET_BLOGS:
			return {
				...state,
				blogs: payload,
				loading: false
			};
		case GET_BLOG:
			return {
				...state,
				blog: payload,
				loading: false
			};
		case BLOG_ERROR:
			return {
				...state,
				error: payload,
				loading: false
			};
		default:
			return state;
	}
}
