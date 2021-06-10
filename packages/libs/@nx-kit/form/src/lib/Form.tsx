import React, { useRef, FormEvent } from 'react';
import { Input } from './Input';
import { Group } from './Group';
import { FormContext } from './FormProvider';
import { FormProps, FormContextValue } from './Form.types';

// https://github.com/iusehooks/usetheform

const Form = ({
  children,
  mode = 'onSubmit',
  reValidateMode = 'onChange',
  defaultValues = {},
  onSubmit,
  ...rest
}: FormProps) => {
  const fields = useRef<any>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('handleSubmit event', event);
    console.log('handleSubmit fields', fields.current);
  };

  const handleChange = (name: string, value: any) => {
    // console.log('handleChange', name, value);
    fields.current[name] = value;
    console.log('handleChange fields', fields.current);
  };

  const handleBlur = (name: string) => {
    // console.log('handleBlur', name);
  };

  const formContextValue: FormContextValue = {
    register: (name: string, values: any) => {
      fields.current[name] = values;

      return {
        onChange: (value: any) => {
          handleChange(name, value);
        },
        onBlur: () => {
          handleBlur(name);
        },
      };
    },
    unregister: (name: string) => {
      fields.current[name] = undefined;
    },
    defaultValues,
  };

  return (
    <form onSubmit={(event: FormEvent<HTMLFormElement>) => handleSubmit(event)}>
      <FormContext.Provider value={formContextValue}>{children}</FormContext.Provider>
    </form>
  );
};

Form.Input = Input;
Form.Group = Group;

export { Form };
