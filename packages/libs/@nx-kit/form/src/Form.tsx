import React, {
  forwardRef,
  useCallback,
  useContext,
  ReactElement,
  useImperativeHandle,
} from 'react';
import { useForm as useReactHookForm } from 'react-hook-form';
// eslint-disable-next-line import/no-cycle
import { Input } from './Input';
// eslint-disable-next-line import/no-cycle
import { Error } from './Error';
// eslint-disable-next-line import/no-cycle
import { Label } from './Label';
import { FieldWrapper } from './FieldWrapper';
import { FormProps, FormContext, OnSubmitData, BaseEvent, OnErrorErrors } from './Form.types';
// eslint-disable-next-line import/no-cycle
import { ControlledInput } from './ControlledInput';

const FormReactContext = React.createContext<FormContext>({
  register: () => ({
    onChange: () => Promise.resolve(),
    onBlur: () => Promise.resolve(),
    ref: () => {},
    name: '',
  }),
  errors: {},
  reset: () => {},
  clearErrors: () => {},
  setError: () => {},
  unregister: () => {},
  trigger: () => new Promise<boolean>((resolve) => resolve(true)),
});

export const useForm = () => useContext(FormReactContext);

export type CompoundComponent = {
  Input: typeof Input;
  ControlledInput: typeof ControlledInput;
  Error: typeof Error;
  Label: typeof Label;
  FieldWrapper: typeof FieldWrapper;
} & (<FormValues>(
  props: FormProps<FormValues> & { ref?: React.Ref<FormContext<FormValues>> }
) => ReactElement);

export const Form = forwardRef(
  <FormValues,>(
    {
      children,
      mode = 'onSubmit',
      reValidateMode = 'onChange',
      defaultValues,
      onSubmit,
      onError,
      ...rest
    }: FormProps<FormValues>,
    ref?: React.Ref<FormContext<FormValues>>
  ) => {
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
      control,
    } = useReactHookForm<FormValues>({
      mode,
      reValidateMode,
      defaultValues,
      ...rest,
    });

    const values: FormContext<FormValues> = {
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
      control,
    };

    useImperativeHandle(ref, () => values, [values]);

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
      [onError]
    );

    const formHandleSubmit = handleSubmit(onSubmitCallback ?? (() => {}), onErrorCallback);

    return (
      <form onSubmit={formHandleSubmit}>
        {/* @ts-ignore */}
        <FormReactContext.Provider value={values}>
          {typeof children === 'function'
            ? // @ts-ignore
              children({ ...values, handleSubmit: formHandleSubmit })
            : children}
        </FormReactContext.Provider>
      </form>
    );
  }
) as unknown as CompoundComponent;

Form.Input = Input;
Form.ControlledInput = ControlledInput;
Form.Error = Error;
Form.Label = Label;
Form.FieldWrapper = FieldWrapper;
