import React, { useContext } from 'react';
import { useForm as useReactHookForm } from 'react-hook-form';
// eslint-disable-next-line import/no-cycle
import { Input } from './Input';
// eslint-disable-next-line import/no-cycle
import { Error } from './Error';
// eslint-disable-next-line import/no-cycle
import { Label } from './Label';
// eslint-disable-next-line import/no-cycle
import { Field } from './Field';
import { FormProps, FormContextValue } from './Form.types';

export const FormContext = React.createContext<FormContextValue>({
  register: () => {},
  errors: {},
  defaultValues: {},
  reset: () => {},
  watch: () => {},
  getValues: () => {},
  clearErrors: () => {},
  setError: () => {},
  unregister: () => {},
  trigger: () => new Promise<boolean>((resolve) => resolve(true)),
});

export const useForm = () => {
  return useContext(FormContext);
};

export const Form = ({
  children,
  mode = 'onSubmit',
  reValidateMode = 'onChange',
  defaultValues,
  onSubmit,
  ...rest
}: FormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    errors,
    getValues,
    reset,
    clearErrors,
    setError,
    unregister,
    trigger,
  } = useReactHookForm({
    mode,
    reValidateMode,
    defaultValues,
    ...rest,
  });

  const values = {
    register,
    errors,
    defaultValues,
    reset,
    watch,
    getValues,
    clearErrors,
    setError,
    unregister,
    trigger,
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContext.Provider value={values}>
        {typeof children === 'function' ? children(values) : children}
      </FormContext.Provider>
    </form>
  );
};

Form.Input = Input;
Form.Error = Error;
Form.Label = Label;
Form.Field = Field;
