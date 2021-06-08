import React, { useRef, useEffect, RefAttributes, FunctionComponentElement } from 'react';

export type FieldHandle = {
  setValue: (value: any) => void;
  setDefaultValue: (value: any) => void;
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
  field: FunctionComponentElement<FieldProps & RefAttributes<FieldHandle>>;
};

const Input = ({ name, field }: InputProps) => {
  const ref = useRef<FieldHandle | null>(null);

  useEffect(() => {
    ref.current?.setValue('gdfg');
  }, []);

  return (
    <>
      <field.type ref={ref} name={name} onChange={console.log} onBlur={console.log} />
      <button type="button" onClick={() => ref.current?.setValue('aaaaaaa')}>
        click
      </button>
    </>
  );
};

export { Input };
