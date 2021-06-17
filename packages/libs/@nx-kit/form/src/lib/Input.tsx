import React, { useRef, useEffect, RefAttributes, FunctionComponentElement } from 'react';
import { useId } from '@react-aria/utils';
import { useForm } from './FormProvider';
import { Validation } from './Form.types';

export type FieldHandle = {
  getValue: () => any;
  setValue: (value: any) => void;
  setError: (error: any) => void;
  setFocus: () => void;
};

export type FieldProps = {
  name?: string;
  onChange?: (value: any) => void;
  onBlur?: (value: any) => void;
};

type InputProps = {
  name: string;

  // type checking on field not possible: https://github.com/microsoft/TypeScript/issues/21699
  // TODO: also allow class element?
  field: FunctionComponentElement<FieldProps & RefAttributes<FieldHandle>>;

  // eslint-disable-next-line react/require-default-props
  validation?: Validation;
};

const Input = ({ name, field, validation }: InputProps) => {
  const ref = useRef<FieldHandle | null>(null);
  const { register, unregister, defaultValues, setFieldState } = useForm();
  const id = useId();

  const onSubmit = () => {
    const value = ref.current?.getValue();
    const validationResult = runValidation(value);
    console.log('Input onSubmit', id, value, validationResult);
  };

  const { onChange, onBlur, runValidation } = register({ name, id, validation, onSubmit });

  const runValidationWrapper = (value: any, callback: any) => {
    const validationResult = runValidation(value);
    if (validationResult === true) {
      ref.current?.setError(false);
      setFieldState(id, { valid: true });
      callback(value);
    } else {
      ref.current?.setError(validationResult);
      setFieldState(id, { valid: false });
    }
  };

  const onChangeWrapper = (value: any) => {
    runValidationWrapper(value, onChange);
  };

  const onBlurWrapper = (value: any) => {
    runValidationWrapper(value, onBlur);
  };

  useEffect(() => {
    // console.log('defaultValues', name, defaultValues);

    // TODO: pass defaultValues or set it in form?
    if (defaultValues[name] !== null && defaultValues[name] !== undefined) {
      ref.current?.setValue(defaultValues[name]);
    } else {
      // trigger onChange at init?
      // this will trigger onChange also for fields that don't have a defaultValue

      // run initial validation
      runValidationWrapper(ref.current?.getValue(), onChange);

      // no initial validation
      // onChange(ref.current?.getValue());
    }

    return () => {
      unregister(name, id);
    };
  }, []);

  return (
    <>
      <field.type
        {...field.props}
        // TODO: merge refs
        ref={ref}
        name={name}
        onChange={onChangeWrapper}
        onBlur={onBlurWrapper}
      />
      <button type="button" onClick={() => ref.current?.setValue('aaaaaaa')}>
        setValue
      </button>
      <button type="button" onClick={() => console.log('getValue', ref.current?.getValue())}>
        getValue
      </button>
      <button type="button" onClick={() => ref.current?.setError(true)}>
        setError
      </button>
      <button type="button" onClick={() => ref.current?.setError(false)}>
        clear error
      </button>
      <button type="button" onClick={() => ref.current?.setFocus()}>
        setFocus
      </button>
    </>
  );
};

export { Input };
