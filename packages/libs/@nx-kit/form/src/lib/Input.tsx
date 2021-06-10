import React, { useRef, useEffect, RefAttributes, FunctionComponentElement } from 'react';
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
  const { register, unregister, defaultValues } = useForm();

  const { onChange, onBlur, runValidation } = register(name, null, validation);

  const runValidationWrapper = (value: any, callback: any) => {
    const validationResult = runValidation(value);
    if (validationResult === true) {
      ref.current?.setError(false);
      callback(value);
    } else {
      ref.current?.setError(validationResult);
    }
  };

  const onChangeWrapper = (value: any) => {
    runValidationWrapper(value, onChange);
  };

  const onBlurWrapper = (value: any) => {
    runValidationWrapper(value, onBlur);
  };

  useEffect(() => {
    // console.log('defaultValues', defaultValues);

    // TODO: pass defaultValues or set it in form?
    if (defaultValues[name]) {
      ref.current?.setValue(defaultValues[name]);
    }

    // trigger onChange at init?
    // this will trigger onChange also for fields that don't have a defaultValue
    // onChange(ref.current?.getValue());

    return () => {
      unregister(name);
    };
  }, []);

  return (
    <>
      <field.type ref={ref} name={name} onChange={onChangeWrapper} onBlur={onBlurWrapper} />
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
