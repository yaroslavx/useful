import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const FormikContainer = () => {
  const options = [
    { value: '', key: 'Select option' },
    { value: 'Option 1', key: 'Option 1' },
    { value: 'Option 2', key: 'Option 2' },
    { value: 'Option 3', key: 'Option 3' },
  ];

  const radioOptions = [
    { value: 'Option 1', key: 'Option 1' },
    { value: 'Option 2', key: 'Option 2' },
    { value: 'Option 3', key: 'Option 3' },
  ];

  const checkOptions = [
    { value: 'Option 1', key: 'Option 1' },
    { value: 'Option 2', key: 'Option 2' },
    { value: 'Option 3', key: 'Option 3' },
  ];

  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkOption: [],
    date: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkOption: Yup.array().required('Required'),
    date: Yup.date().required('Required').nullable(),
  });
  const onSubmit = (values) => console.log(values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control='input'
            label='Email'
            type='email'
            name='email'
          />
          <FormikControl
            control='textarea'
            label='Description'
            name='description'
          />
          <FormikControl
            control='select'
            label='Options'
            name='selectOption'
            options={options}
          />
          <FormikControl
            control='radio'
            label='Some radio options'
            name='radioOption'
            options={radioOptions}
          />
          <FormikControl
            control='checkbox'
            label='Some check options'
            name='checkOption'
            options={checkOptions}
          />
          <FormikControl control='date' label='Pick a date' name='date' />
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
