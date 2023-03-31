import React from 'react';
import Check from './Check';
import { Date } from './Date';
import { Input } from './Input';
import { Radio } from './Radio';
import Select from './Select';
import Textarea from './Textarea';
import ChakraUiComponent from './ChakraUiComponent';

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
      return <Textarea {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'radio':
      return <Radio {...rest} />;
    case 'checkbox':
      return <Check {...rest} />;
    case 'date':
      return <Date {...rest} />;
    case 'chakra':
      return <ChakraUiComponent {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
