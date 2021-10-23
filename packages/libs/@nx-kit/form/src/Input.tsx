import React, { useCallback, useEffect } from 'react';
import { get } from 'react-hook-form';
import { mergeRefs } from '@nx-kit/utils';
import { InputProps } from './Input.types';
// eslint-disable-next-line import/no-cycle
import { useForm } from './Form';

const Input = (
  { name, field: Field, validation }: InputProps,
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

  // console.log(name, getValues());

  return React.cloneElement(Field, {
    onChange,
    onBlur,
    defaultValue,
    name: registerName,
    ref: refs,
    hasError: name && errors?.[name],
  });
};

const InputWithRef = React.forwardRef(Input);
export { InputWithRef as Input };
