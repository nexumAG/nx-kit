import React from 'react';
import { Controller } from 'react-hook-form';
import { ControlledInputProps } from './ControlledInput.types';
// eslint-disable-next-line import/no-cycle
import { useForm } from './Form';

export const ControlledInput = ({ name, render, validation }: ControlledInputProps) => {
  const { control } = useForm();

  return (
    <Controller
      control={control}
      name={name}
      rules={validation}
      render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) =>
        render({ ref, value, onChange, onBlur, hasError: !!error })
      }
    />
  );
};
