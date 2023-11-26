// Step3.tsx
import React from 'react';
import { Field } from 'formik';
import { useFormikContext } from 'formik';
import FormValues from '../types/FormValues.ts';

const Step3 = () => {
    const { values } = useFormikContext<FormValues>();

  return (
    <>
      <h2>License Information</h2>
      <label htmlFor="typeUser">Type of user</label>
      <Field as="select" id="typeLicense" name="typeLicense">
        <option value="default">-- Select an Option --</option>
        <option value="personal">Personal or non Comercial projects</option>
        <option value="enterprise">Enterprise or Comercial projects</option>
        <option value="student">student</option>
      </Field>

      {values.typeLicense === 'personal' && (
        <>
            <label htmlFor='topic'>Projects topixs</label>
            <Field id="topic" name="topic" type="text" placeholder="Ingenieere/Cience..."/>
        </>
      )}

      {values.typeLicense === 'enterprise' && (
        <>
            <label htmlFor='enterpriseName'>Enterprise Name</label>
            <Field id="enterpriseName" name="enterpriseName" type="text" placeholder="Google Inc"/>
            <label htmlFor='nEmployees'>Number of collaborators</label>
            <Field name="nEmployees" id="nEmployees" placeholder="1-*" type="number"/>
        </>
      )}

      {values.typeLicense === 'student' && (
        <>
            <label htmlFor='schoolName'>School Name</label>
            <Field id="schoolName" name="schoolName" type="text" placeholder="U Distrital"/>
            <label htmlFor='nEmployees'>Number of participants</label>
            <Field name="nEmployees" id="nEmployees" placeholder="1-*" type="number"/>
        </>
      )}
    </>
  );
};

export default Step3;
