import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  DELETE_ACCOUNT,
  GET_PROFILES
} from './types';

//Get the current user profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const result = await axios.get('/api/profile/me');

    dispatch({ type: GET_PROFILE, payload: result.data });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.data.msg,
        status: error.response.status
      }
    });
  }
};

//Get all Profile
export const getProfiles = () => async dispatch => {
  dispatch({ type: CLEAR_PROFILE });
  try {
    const result = await axios.get('/api/profile');
    dispatch({ type: GET_PROFILES, payload: result.data });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.data.msg,
        status: error.response.status
      }
    });
  }
};

//Get all Profile
export const getProfileById = userId => async dispatch => {
  try {
    const result = await axios.get(`/api/profile/user/${userId}`);

    dispatch({ type: GET_PROFILE, payload: result.data });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.data.msg,
        status: error.response.status
      }
    });
  }
};

//Create or Update profile

export const createProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };
    const result = await axios.post('/api/profile', formData, config);
    dispatch({ type: GET_PROFILE, payload: result.data });
    dispatch(
      setAlert(`${edit ? 'Profile updated' : 'Profile created'}`, 'success')
    );

    if (!edit) {
      history.push('/dashboard');
    }
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.data.msg,
        status: error.response.status
      }
    });
  }
};

//Add Experience
export const addExperience = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };
    const result = await axios.put('/api/profile/experience', formData, config);
    dispatch({ type: UPDATE_PROFILE, payload: result.data });
    dispatch(setAlert('Experience added', 'success'));

    history.push('/dashboard');
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.data.msg,
        status: error.response.status
      }
    });
  }
};

//Add Education
export const addEducation = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };
    const result = await axios.put('/api/profile/education', formData, config);
    dispatch({ type: UPDATE_PROFILE, payload: result.data });
    dispatch(setAlert('Education added', 'success'));

    history.push('/dashboard');
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.data.msg,
        status: error.response.status
      }
    });
  }
};

// Delete experience
export const deleteExperience = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/profile/experience/${id}`);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert('Experience Removed', 'success'));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete education
export const deleteEducation = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/profile/education/${id}`);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert('Education Removed', 'success'));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Delete Account and Profile

export const deleteAccount = () => async dispatch => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      await axios.delete(`/api/profile/`);

      dispatch({
        type: CLEAR_PROFILE
      });
      dispatch({
        type: DELETE_ACCOUNT
      });
      dispatch(
        setAlert('Your Account has been pernamently deleted', 'success')
      );
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};
