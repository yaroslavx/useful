import { ErrorMessage, Field } from 'formik';
import React from 'react';
import { TextError } from './TextError';

export const Input = ({ label, name, ...rest }) => {
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
