import React from 'react';
import { TextFieldContainer } from '@nx-kit/textfield';
import { FieldProps } from './Field.types';

export const Field = ({ type, children }: FieldProps) => {
  if (type === 'text' || type === 'password' || type === 'textarea') {
    return <TextFieldContainer>{children}</TextFieldContainer>;
  }

  return <>{children}</>;
};
