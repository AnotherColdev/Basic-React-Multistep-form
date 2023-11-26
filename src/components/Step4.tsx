// Step4.tsx
import React from "react";
import { Field } from "formik";

const Step4 = () => (
    <>
        <h2>Payout Info</h2>
        <label htmlFor="cardNumber">Card Number</label>
        <Field name="cardNumber" id="cardNumber" placeholder="0000 0000 0000 0000" type="number"/>
        <label htmlFor="cardName">Titular's name</label>
        <Field name="cardName" id="cardName" placeholder="Your Name" type="text"/>
        <label htmlFor="expireDate">Expiration Date</label>
        <Field name="expireDate" id="expireDate" placeholder="M.M/Y.Y" type="date"/>
        <label htmlFor="cvv">CVV</label>
        <Field name="cvv" id="cvv" placeholder="xxx" type="number"/>
    </>
);

export default Step4;