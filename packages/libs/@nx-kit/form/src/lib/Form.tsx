import React, { useRef, FormEvent } from 'react';
import { Input } from './Input';
import { Group } from './Group';
import { FormContext } from './FormProvider';
import { FormProps, FormContextValue, Validation, FieldStates, FieldState } from './Form.types';
import { runValidation } from './validation';

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
  const fieldStates = useRef<FieldStates>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // console.log('handleSubmit event', event);
    console.log('handleSubmit fieldStates', fieldStates.current);
    console.log('handleSubmit fields', fields.current);
  };

  const handleChange = (name: string, value: any) => {
    // console.log('handleChange', name, value);
    fields.current[name] = value;
    // console.log('handleChange fields', name, value, fields.current);
  };

  const handleBlur = (name: string) => {
    // console.log('handleBlur', name);
  };

  const formContextValue: FormContextValue = {
    register: (name: string, id: string, value?: any, validation?: Validation) => {
      fields.current[name] = value;
      fieldStates.current[id] = { valid: true };

      return {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        onChange: (value: any) => {
          handleChange(name, value);
        },
        onBlur: () => {
          handleBlur(name);
        },
        // eslint-disable-next-line @typescript-eslint/no-shadow
        runValidation: (value: any) => {
          return runValidation(value, validation);
        },
      };
    },
    unregister: (name: string) => {
      delete fields.current[name];
    },
    setFieldState: (id: string, state: FieldState | null) => {
      if (state === null) {
        delete fieldStates.current[id];
      } else {
        fieldStates.current[id] = state;
      }
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
