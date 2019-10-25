import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const SurveyInputItem = ({ label, value, choiceName, setValue }) => {
  return (
    <div className='mb-5'>
      <h4 className=''>{label}</h4>
      <textarea
        name={choiceName}
        className='form-control'
        id={choiceName}
        placeholder='Enter text here'
        value={value}
        onChange={setValue}
      ></textarea>
    </div>
  );
};

SurveyInputItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  choiceName: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired
};

export default SurveyInputItem;
