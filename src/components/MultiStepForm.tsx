// MultiStepForm.tsx
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import Step1 from './Step1.tsx';
import Step2 from './Step2.tsx';
import Step3 from './Step3.tsx';
import Step4 from '../components/Step4.tsx'
import Summary from './Summary.tsx';
import FormValues from '../types/FormValues.ts';

const steps = [Step1, Step2, Step3, Step4, Summary];

const MultiStepForm = () => {
    const [step, setStep] = useState(0);
  
    const handleSubmit = async (values: FormValues) => {
      await new Promise((r) => setTimeout(r, 500));
      alert(JSON.stringify(values, null, 2));
    };
  
    const Step = steps[step];
  
    return (
      <div>
        <h1>Formulario de Varios Pasos</h1>
        <Formik initialValues={{email: '', password: '', name: '', lastName: '', addres: '', telephone: '', typeLicense: '', cardNumber: '', cardName: ''}} onSubmit={handleSubmit}>
          <Form>
            <Step />
  
            {step > 0 && (
              <button type="button" onClick={() => setStep((s) => s - 1)}>
                Anterior
              </button>
            )}
  
            {step < steps.length - 1 && (
              <button type="button" onClick={() => setStep((s) => s + 1)}>
                Siguiente
              </button>
            )}
  
            {step === steps.length - 1 && <button type="submit">Enviar</button>}
          </Form>
        </Formik>
      </div>
    );
  };
  
  export default MultiStepForm;