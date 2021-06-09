import React, { forwardRef, useRef, useImperativeHandle, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TextField as TextFieldNx } from '@nx-kit/textfield';
import { FieldHandle, FieldProps } from './Input';

type TextFieldProps = FieldProps & {
  autoComplete?: string;
};

const TextField = forwardRef<FieldHandle, TextFieldProps>(
  ({ name, onChange, onBlur, ...rest }, ref) => {
    const localRef = useRef<HTMLInputElement | null>(null);
    const [hasError, setHasError] = useState(false);

    useImperativeHandle(ref, () => ({
      getValue: () => localRef.current?.value,
      setValue: (value: any) => {
        if (localRef) {
          // @ts-ignore
          localRef.current.value = value;
        }
      },
      setError: (error: any) => {
        setHasError(!!error);
      },
      setFocus: () => localRef.current?.focus(),
    }));

    console.log('render', 'TextField');

    return (
      <TextFieldNx
        name={name}
        ref={localRef}
        onChange={(event) => onChange && onChange(event.currentTarget.value)}
        onBlur={() => onBlur && onBlur()}
        {...rest}
        hasError={hasError}
      />
    );
  }
);

export { TextField };
