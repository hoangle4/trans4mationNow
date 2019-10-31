import React from 'react';
import PropTypes from 'prop-types';

const SurveyInputItem = ({
  label,
  value,
  choiceName,
  setValue,
  placeholder
}) => {
  return (
    <div className='mb-5'>
      <h4 className=''>{label}</h4>
      <textarea
        name={choiceName}
        className='form-control'
        id={choiceName}
        placeholder={placeholder}
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
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default SurveyInputItem;
