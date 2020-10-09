/* eslint-disable react/jsx-indent */
import React, { useCallback } from 'react';
import { mergeRefs } from '@nx-kit/utils';
import { TextField, TextFieldType } from '@nx-kit/textfield';
import { Checkbox } from '@nx-kit/checkbox';
import { InputProps, InputType } from './Input.types';
// eslint-disable-next-line import/no-cycle
import { useForm } from './Form';

const Input = (
  { name, type, validation, ...rest }: InputProps,
  ref?: React.Ref<HTMLInputElement | HTMLTextAreaElement | null>
) => {
  const { register, errors, defaultValues } = useForm();
  // register field and merge refs
  const mergedRefs = useCallback(
    mergeRefs<HTMLInputElement | HTMLTextAreaElement | null>(ref, register(validation)),
    []
  );

  return (
    <>
      {(type === ('text' as InputType) ||
        type === ('textarea' as InputType) ||
        type === ('password' as InputType)) && (
        <TextField
          ref={mergedRefs}
          type={type as TextFieldType}
          name={name}
          defaultValue={name && defaultValues?.[name]}
          error={name && errors?.[name]}
          {...rest}
        />
      )}
      {type === ('checkbox' as InputType) && (
        <Checkbox
          ref={mergedRefs}
          name={name}
          defaultValue={name && defaultValues?.[name]}
          error={name && errors?.[name]}
          {...rest}
        />
      )}
    </>
  );
};

const InputWithRef = React.forwardRef(Input);
export { InputWithRef as Input };
