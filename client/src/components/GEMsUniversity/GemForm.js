import React, { Fragment, useState } from 'react';
import GemFormItem from './GemFormItem';
import Jumbotron from '../Jumbotron';
const GemForm = () => {
  const [formValue, setFormValue] = useState({
    nameOfMinors: '',
    hobbiesOrInterest: '',
    grade: '',
    age: '',
    programName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    parentOrGuardian: '',
    relationship: '',
    cellPhone: '',
    emergencyPhone: '',
    emergencyContact: ''
  });

  const {
    nameOfMinors,
    hobbiesOrInterest,
    grade,
    age,
    programName,
    address,
    city,
    state,
    zip,
    parentOrGuardian,
    relationship,
    cellPhone,
    emergencyPhone,
    emergencyContact
  } = formValue;

  const hanleOnChange = e => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSurveySubmit = e => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <div className='row m-0'>
        <div className='col-12 p-0'>
          <Jumbotron
            title='WELCOME TO G.E.Ms University'
            subtitle={
              <Fragment>
                <strong>Learn how to become a member</strong>
                <br />
                <strong>"Adopt" a gem family</strong>
              </Fragment>
            }
          />
        </div>
      </div>

      <div className='row m-0 Survey-Row'>
        <div className='col-12 mb-5'>
          <h3>
            MEMBERSHIP QUESTIONAIRE - Confidential Looking for members to join
            and engage.
          </h3>
          <h5> PARTICIPANT Information</h5>
        </div>
        <div className='col-6 p-0 mx-auto'>
          <form>
            <GemFormItem
              label='Name of minors'
              value={nameOfMinors}
              inputName='nameOfMinors'
              setValue={hanleOnChange}
            />
            <GemFormItem
              label='Hobbies/Interest'
              value={hobbiesOrInterest}
              inputName='hobbiesOrInterest'
              setValue={hanleOnChange}
            />
            <GemFormItem
              label='Grade'
              value={grade}
              inputName='grade'
              setValue={hanleOnChange}
            />
            <GemFormItem
              label='Age(s)'
              value={age}
              inputName='age'
              setValue={hanleOnChange}
            />
            <GemFormItem
              label='Name of program participant/relationship'
              value={programName}
              inputName='programName'
              setValue={hanleOnChange}
            />
            <GemFormItem
              label='Address'
              value={address}
              inputName='address'
              setValue={hanleOnChange}
            />
            <GemFormItem
              label='City'
              value={city}
              inputName='city'
              setValue={hanleOnChange}
            />
            <GemFormItem
              label='State'
              value={state}
              inputName='state'
              setValue={hanleOnChange}
            />
            <GemFormItem
              label='Zip'
              value={zip}
              inputName='zip'
              setValue={hanleOnChange}
            />
            <GemFormItem
              label='Parent/Gaurdian name'
              value={parentOrGuardian}
              inputName='parentOrGuardian'
              setValue={hanleOnChange}
            />
            <GemFormItem
              label='Relationship'
              value={relationship}
              inputName='relationship'
              setValue={hanleOnChange}
            />
            <GemFormItem
              label='Cell phone'
              value={cellPhone}
              inputName='cellPhone'
              setValue={hanleOnChange}
            />
            <GemFormItem
              label='Emergency Phone'
              value={emergencyPhone}
              inputName='emergencyPhone'
              setValue={hanleOnChange}
            />
            <GemFormItem
              label='Emergency Contact'
              value={emergencyContact}
              inputName='emergencyContact'
              setValue={hanleOnChange}
            />
            <button className='green-btn'>Submit</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default GemForm;
