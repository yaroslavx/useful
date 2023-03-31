import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const EnrollmentFrom = () => {
  const selectOptions = [
    { key: 'Select something', value: '' },
    { key: 'Email', value: 'emailmoc' },
    { key: 'Telephone', value: 'telephonemoc' },
  ];

  const checkOptions = [
    { key: 'Emai1l', value: 'emailmo1c' },
    { key: 'Email', value: 'emailmoc' },
    { key: 'Telephone', value: 'telephonemoc' },
  ];

  const initialValues = {
    email: '',
    about: '',
    something: '',
    skills: [],
    date: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    about: Yup.string().required('Required'),
    something: Yup.string().required('Required'),
    date: Yup.date().required('Required').nullable(),
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
  };

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
            type='email'
            label='Email'
            name='email'
          />
          <FormikControl control='textarea' label='About' name='about' />

          <FormikControl
            control='select'
            label='Somthing'
            name='something'
            options={selectOptions}
          />
          <FormikControl
            control='checkbox'
            label='Skills'
            name='skills'
            options={checkOptions}
          />
          <FormikControl control='date' label='Date' name='date' />
          <button type='submit' disabled={!formik.isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default EnrollmentFrom;
