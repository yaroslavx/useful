import { validateValue, type GetValidator } from './validate';

export const required: GetValidator<string, string> = (
  message = 'Required field'
) => {
  return async (value) => (value ? null : message);
};

// Usage
// const validators = [required(), minLength(5), maxLength(150)];
// const value: string = 'qwerty12345';

// const validationResult = validateValue(value, validators);
