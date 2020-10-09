import React, { useContext } from 'react';
import { useForm as useReactHookForm } from 'react-hook-form';
import { Input } from './Input';
import { Error } from './Error';
import { FormProps } from './Form.types';

const FormContext = React.createContext<{ register: any; errors?: any }>({
  register: () => {},
});

export const useForm = () => {
  return useContext(FormContext);
};

export const Form = ({
  children,
  mode = 'onSubmit',
  defaultValues,
  onSubmit,
  onWatch,
}: FormProps) => {
  const { register, handleSubmit, watch, errors } = useReactHookForm({ mode, defaultValues });

  // watch(onWatch);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContext.Provider value={{ register, errors }}>{children}</FormContext.Provider>
      <button type="submit">Submit</button>
    </form>
  );
};

Form.Input = Input;
Form.Error = Error;
