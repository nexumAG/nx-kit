import React, { useRef, FormEvent } from 'react';
import { Input } from './Input';
import { Group } from './Group';
import { FormContext } from './FormProvider';
import {
  FormProps,
  FormContextValue,
  FieldStates,
  FieldState,
  RegisterParams,
  RegisterReturn,
} from './Form.types';
import { runValidation } from './validation';

// https://github.com/iusehooks/usetheform

const Form = ({
  children,
  // mode = 'onSubmit',
  // reValidateMode = 'onChange',
  // onSubmit,
  // ...rest
  defaultValues = {},
}: FormProps) => {
  const fields = useRef<any>({});
  const fieldStates = useRef<FieldStates>({});
  const submitHandlers = useRef<{ [id: string]: () => void }>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // console.log('handleSubmit event', event);
    console.log('handleSubmit fieldStates', fieldStates.current);
    console.log('handleSubmit fields', fields.current);
    Object.keys(submitHandlers.current).forEach((id) => {
      submitHandlers.current[id]();
    });
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
    register: ({
      name,
      id,
      value: fieldValue,
      validation,
      onSubmit,
    }: RegisterParams): RegisterReturn => {
      fields.current[name] = fieldValue;
      fieldStates.current[id] = { valid: true };
      submitHandlers.current[id] = onSubmit;

      return {
        onChange: (value: any) => {
          handleChange(name, value);
        },
        onBlur: () => {
          handleBlur(name);
        },
        runValidation: (value: any) => {
          return runValidation(value, validation);
        },
      };
    },
    unregister: (name: string, id: string) => {
      delete fields.current[name];
      delete fieldStates.current[id];
      delete submitHandlers.current[id];
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
