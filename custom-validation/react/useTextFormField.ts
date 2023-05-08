import { useCallback, useState } from 'react';
import type { ChangeEvent } from 'react';
import type { DefaultField } from './types';
import { validateValue, Validator, ValidationResult } from '../validate';

type TextField = DefaultField & {
  handleChange: (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  handleBlur: () => void;
};

const useTextFormField = (
  id: string,
  validators: Validator<string>[],
  init = ''
): TextField => {
  const [value, setValue] = useState(init);
  const [error, setError] = useState<ValidationResult>(null);

  const handleChange = useCallback(
    async (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const val = event.target.value;

      setValue(val);
      setError(await validateValue(val, validators));
    },
    [validators]
  );

  const handleBlur = useCallback(async () => {
    setError(await validateValue(value, validators));
  }, [value, validators]);

  const hasError = useCallback(async () => {
    const err = await validateValue(value, validators);
    setError(err);

    return !!err;
  }, [value, validators]);

  return { id, value, error, hasError, handleChange, handleBlur };
};

export { TextField, useTextFormField };
