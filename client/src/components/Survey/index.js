import React, { Fragment, useState } from 'react';
import SurveyItem from './SurveyItem';
import Jumbotron from '../Jumbotron';
const Survey = () => {
  const [inputValue, setInputValue] = useState({
    ageRange: '',
    gender: '',
    childGender: '',
    relationship: '',
    volunteering: '',
    activity: '',
    resource: '',
    youthAge: '',
    challenging: '',
    additional: ''
  });

  const { ageRange } = inputValue;
  const hanleOnChange = e => {
    console.log(e.target.value);
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  return (
    <Fragment>
      <div className='row mx-0'>
        <div className='col-12 px-0'>
          <Jumbotron
            title='Help G.E.M.s Improve'
            subtitle='We valued your feedback!'
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-8 mx-auto'>
          <SurveyItem
            label='What is your age range?'
            choices={[
              '40-49 years old',
              '50-59 years old',
              '60-69 years old',
              '70+',
              'prefer not to answer'
            ]}
            choiceName='ageRange'
            setValue={hanleOnChange}
          />
          <SurveyItem
            label='Select gender?'
            choices={['Female', 'Male', 'prefer not to answer']}
            choiceName='gender'
            setValue={hanleOnChange}
          />
          <SurveyItem
            label='Select gender of child?'
            choices={['Female', 'Male', 'prefer not to answer']}
            choiceName='childGender'
            setValue={hanleOnChange}
          />
          <SurveyItem
            label='Are you the grandparent of the child or a relative?'
            choices={['grandparent', 'Aunt/Uncle', 'Cousin', 'Other']}
            choiceName='relationship'
            setValue={hanleOnChange}
          />
          <SurveyItem
            label='Would you be interested in volunteering on the committee?'
            choices={['Yes', 'No', 'Maybe']}
            choiceName='volunteering'
            setValue={hanleOnChange}
          />
          <SurveyItem
            label='How would you prefer to receive resources and information that would help you with Recreational and Leisure activities?'
            choices={[
              'Emails',
              'Text messages',
              'Traditional mail',
              'in-person'
            ]}
            choiceName='resource'
            setValue={hanleOnChange}
          />
          <SurveyItem
            label='What is the age range of the youth?'
            choices={[
              '0-5 years old',
              '5-12 years old',
              '12- 16 years old',
              '16-21+ years old'
            ]}
            choiceName='youthAge'
            setValue={hanleOnChange}
          />
          <SurveyItem
            label='What do you find the most challenging?'
            choices={[
              'Getting the proper information',
              'Lack of communication with the younger',
              'Lack of financial support to provide or attend recreational activities'
            ]}
            choiceName='challenging'
            setValue={hanleOnChange}
          />
          {/* <SurveyItem
            label='Select gender?'
            choices={['Female', 'Male', 'prefer not to answer']}
            choiceName='gender'
            setValue={hanleOnChange}
          />
          <SurveyItem
            label='Select gender?'
            choices={['Female', 'Male', 'prefer not to answer']}
            choiceName='gender'
            setValue={hanleOnChange}
          /> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Survey;
