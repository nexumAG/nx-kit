import React, { useCallback, useContext } from 'react';
import { useForm as useReactHookForm } from 'react-hook-form';
// eslint-disable-next-line import/no-cycle
import { Input } from './Input';
// eslint-disable-next-line import/no-cycle
import { Error } from './Error';
// eslint-disable-next-line import/no-cycle
import { Label } from './Label';
import { FieldWrapper } from './FieldWrapper';
import { FormProps, FormContextValue, OnSubmitData, BaseEvent, OnErrorErrors } from './Form.types';

export const FormContext = React.createContext<FormContextValue>({
  register: () => ({
    onChange: () => Promise.resolve(),
    onBlur: () => Promise.resolve(),
    ref: () => {},
    name: '',
  }),
  errors: {},
  defaultValues: {},
  reset: () => {},
  clearErrors: () => {},
  setError: () => {},
  unregister: () => {},
  trigger: () => new Promise<boolean>((resolve) => resolve(true)),
  // watch: () => {},
  // getValues: () => {},
});

export const useForm = () => useContext(FormContext);

export const Form = <FormValues,>({
  children,
  mode = 'onSubmit',
  reValidateMode = 'onChange',
  defaultValues,
  onSubmit,
  onError,
  ...rest
}: FormProps<FormValues>) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
    reset,
    clearErrors,
    setError,
    unregister,
    trigger,
  } = useReactHookForm<FormValues>({
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

  const onSubmitCallback = useCallback(
    (data: OnSubmitData<FormValues>, event?: BaseEvent) => {
      if (onSubmit) {
        // @ts-ignore
        onSubmit(data, event, values);
      }
    },
    [onSubmit]
  );

  const onErrorCallback = useCallback(
    (_errors: OnErrorErrors<FormValues>, event?: BaseEvent) => {
      if (onError) {
        // @ts-ignore
        onError(_errors, event, values);
      }
    },
    [onSubmit]
  );

  return (
    <form onSubmit={handleSubmit(onSubmitCallback ?? (() => {}), onErrorCallback)}>
      {/* @ts-ignore */}
      <FormContext.Provider value={values}>
        {/* @ts-ignore */}
        {typeof children === 'function' ? children(values) : children}
      </FormContext.Provider>
    </form>
  );
};

Form.Input = Input;
Form.Error = Error;
Form.Label = Label;
Form.FieldWrapper = FieldWrapper;
