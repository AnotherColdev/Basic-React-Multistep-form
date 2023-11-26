// Step2.tsx
import React from 'react';
import { Field } from 'formik';

const Step2 = () => (
  <>
  <h2>Contact Information</h2>
    <label htmlFor='name'>Name</label>
    <Field id="name" name="name" placeholder="Captain Price" type="text"/>
    <label htmlFor='lastName'>Lastname</label>
    <Field id="lastName" name="lastName" placeholder="Mc duck" type="text"/>
    <label htmlFor='addres'>Addres</label>
    <Field id="addres" name="addres" placeholder="Wall Street #21-56" type="text"/>
    <label htmlFor='telephone'>Telephone</label>
    <Field id="telephone" name="telephone" placeholder="3xx xxxx xxx" type="number"/>
  </>
);

export default Step2;
