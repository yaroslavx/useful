import { ErrorMessage, Field } from 'formik';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React from 'react';
import { TextError } from './TextError';

export const Date = ({ label, name, ...rest }) => {
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
