// Step1.tsx
import React from 'react';
import { Field } from 'formik';

const Step1 = () => (
  <>
    <h2>Acces Information</h2>
    <label htmlFor="email">Name</label>
    <Field id="email" name="email" placeholder="contacto@ejemplo.com" type="email" required/>
    <label htmlFor='password'>Password</label>
    <Field id="password" name="password" placeholder="********" type="password" required/>
  </>
);

export default Step1;