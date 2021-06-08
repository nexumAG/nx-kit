import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { FieldHandle, FieldProps } from './Input';

type TextFieldProps = FieldProps & {
  autoComplete?: string;
};

const TextField = forwardRef<FieldHandle, TextFieldProps>(({ name, ...rest }, ref) => {
  const localRef = useRef<HTMLInputElement | null>(null);
  useImperativeHandle(ref, () => ({
    setValue: (value: any) => {
      if (localRef) {
        // @ts-ignore
        localRef.current.value = value;
      }
    },
    setDefaultValue: (value: any) => {},
    setError: (error: any) => {},
    setFocus: () => {},
  }));

  return <input type="text" name={name} ref={localRef} {...rest} />;
});

export { TextField };
