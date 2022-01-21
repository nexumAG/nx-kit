import React, { useCallback, useEffect, forwardRef } from 'react';
import { get } from 'react-hook-form';
import { mergeRefs } from '@nx-kit/utils';
import { InputProps } from './Input.types';
// eslint-disable-next-line import/no-cycle
import { useForm } from './Form';

const Input = (
  { name, field: Field, validation, passHasError = true }: InputProps,
  ref?: React.Ref<HTMLInputElement | HTMLTextAreaElement | null>
) => {
  const { register, unregister, errors, defaultValues, getValues } = useForm();

  useEffect(() => {
    return () => {
      unregister(name);
    };
  }, []);

  const {
    name: registerName,
    ref: registerRef,
    onChange,
    onBlur,
  } = register(name, typeof validation === 'function' ? validation(getValues) : validation);

  // register field and merge refs
  const refs = useCallback(
    mergeRefs<HTMLInputElement | HTMLTextAreaElement | null>(ref, registerRef),
    [ref]
  );

  const defaultValue = get(defaultValues, name);

  const props = {
    onChange,
    onBlur,
    defaultValue,
    name: registerName,
    ref: refs,
  };

  return React.cloneElement(
    Field,
    passHasError ? { ...props, hasError: name && errors?.[name] } : props
  );
};

const InputWithRef = forwardRef(Input);
export { InputWithRef as Input };
