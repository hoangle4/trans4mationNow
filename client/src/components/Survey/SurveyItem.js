import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const SurveyItem = ({ label, choices, choiceName, setValue }) => {
  return (
    <div className='mb-5'>
      <h4>{label}</h4>
      {choices.length !== 0
        ? choices.map((c, i) => (
            <div key={i} className='custom-control custom-radio'>
              <input
                type='radio'
                id={`${choiceName}${i}`}
                name={`${choiceName}`}
                className='custom-control-input'
                value={c}
                onChange={setValue}
              />
              <label
                className='custom-control-label'
                htmlFor={`${choiceName}${i}`}
              >
                {c}
              </label>
            </div>
          ))
        : ''}
    </div>
  );
};

SurveyItem.propTypes = {
  label: PropTypes.string.isRequired,
  choices: PropTypes.array.isRequired,
  choiceName: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired
};

export default SurveyItem;
