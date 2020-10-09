import React, { useCallback, useRef } from 'react';
import { mergeRefs } from '@nx-kit/utils';
import { TextField } from '@nx-kit/textfield';
import { useForm } from './Form';
import { InputProps, InputType } from './Input.types';

export const Input = ({ name, type, validation, ...rest }: InputProps) => {
  const { register, errors } = useForm();
  // register field and merge refs
  const ref = useRef(null);
  const mergedRefs = useCallback(
    mergeRefs<HTMLInputElement | HTMLTextAreaElement | null>(ref, register(validation)),
    []
  );

  return type === InputType.text ? (
    <TextField ref={mergedRefs} name={name} error={name && errors?.[name]} {...rest} />
  ) : null;
};
