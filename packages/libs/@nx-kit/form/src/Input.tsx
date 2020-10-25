import React, { useCallback } from 'react';
import { mergeRefs } from '@nx-kit/utils';
import { InputProps } from './Input.types';
// eslint-disable-next-line import/no-cycle
import { useForm } from './Form';

const Input = (
  { name, field: Field, validation }: InputProps,
  ref?: React.Ref<HTMLInputElement | HTMLTextAreaElement | null>
) => {
  const { register, errors, defaultValues, getValues } = useForm();
  // register field and merge refs
  const refs = useCallback(
    mergeRefs<HTMLInputElement | HTMLTextAreaElement | null>(
      ref,
      register(typeof validation === 'function' ? validation(getValues) : validation)
    ),
    []
  );

  return React.cloneElement(Field, {
    name,
    ref: refs,
    defaultValue: name && defaultValues?.[name],
    hasError: name && errors?.[name],
  });
};

const InputWithRef = React.forwardRef(Input);
export { InputWithRef as Input };
