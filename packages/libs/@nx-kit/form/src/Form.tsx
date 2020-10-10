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
import { FormProps } from './Form.types';

export type FormContextValue = {
  register: any;
  errors?: any;
  defaultValues?: any;
  reset?: () => void;
  watch?: () => any;
  getValues?: () => any;
};

export const FormContext = React.createContext<FormContextValue>({
  register: () => {},
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
  setWatchers,
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
  } = useReactHookForm({
    mode,
    reValidateMode,
    defaultValues,
    ...rest,
  });

  // setWatchers?.forEach((watcher) => {
  //   // watcher(watch());
  // });

  // console.log('getValues', getValues());

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContext.Provider value={{ register, errors, defaultValues, watch, getValues }}>
        {children}
      </FormContext.Provider>
    </form>
  );
};

Form.Input = Input;
Form.Error = Error;
Form.Label = Label;
Form.Field = Field;
