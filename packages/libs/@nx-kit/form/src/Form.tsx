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

export const FormContext = React.createContext<{ register: any; errors?: any }>({
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

  watch(onWatch);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContext.Provider value={{ register, errors }}>{children}</FormContext.Provider>
    </form>
  );
};

Form.Input = Input;
Form.Error = Error;
Form.Label = Label;
Form.Field = Field;
