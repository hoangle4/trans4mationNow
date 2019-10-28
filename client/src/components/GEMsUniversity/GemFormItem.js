import React from 'react';
import PropTypes from 'prop-types';

const GemFormItem = ({ label, value, inputName, setValue }) => {
  return (
    <div className='mb-5 form-group'>
      <h5 className=''>{label}</h5>
      <input
        name={inputName}
        className='form-control'
        id={inputName}
        placeholder={label}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

GemFormItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired
};

export default GemFormItem;
