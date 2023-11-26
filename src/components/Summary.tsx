// Summary.tsx
import React from 'react';
import { useFormikContext } from 'formik';
import FormValues from '../types/FormValues.ts';

const Summary = () => {
  const { values } = useFormikContext<FormValues>();

  return (
    <>
      <h1>Resumen</h1>
      <p>Email: {values.email}</p>
      <p>Name: {values.name}</p>
      <p>Last Name: {values.lastName}</p>
      <p>Adress: {values.addres}</p>
      <p>Telephone: {values.telephone}</p>
      <p>Type License: {values.typeLicense}</p>
      <p>Card Number: {values.cardNumber}</p>
      <p>Card Name: {values.cardName}</p>
    </>
  );
};

export default Summary;
