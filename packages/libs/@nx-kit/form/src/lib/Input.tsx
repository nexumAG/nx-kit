import React, { useRef, useEffect, RefAttributes, FunctionComponentElement } from 'react';
import { useForm } from './FormProvider';

export type FieldHandle = {
  getValue: () => any;
  setValue: (value: any) => void;
  setError: (error: any) => void;
  setFocus: () => void;
};

export type FieldProps = {
  name?: string;
  onChange?: (value: any) => void;
  onBlur?: () => void;
};

type InputProps = {
  name: string;

  // type checking on field not possible: https://github.com/microsoft/TypeScript/issues/21699
  // TODO: also allow class element?
  field: FunctionComponentElement<FieldProps & RefAttributes<FieldHandle>>;
};

const Input = ({ name, field }: InputProps) => {
  const ref = useRef<FieldHandle | null>(null);
  const { register, unregister, defaultValues } = useForm();

  const { onChange, onBlur } = register(name);

  useEffect(() => {
    // console.log('defaultValues', defaultValues);

    // TODO: pass defaultValues or set it in form?
    if (defaultValues[name]) {
      ref.current?.setValue(defaultValues[name]);
    }

    return () => {
      unregister(name);
    };
  }, []);

  return (
    <>
      <field.type ref={ref} name={name} onChange={onChange} onBlur={onBlur} />
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
