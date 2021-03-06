import React from 'react';
import { Text, TextProps } from '@nx-kit/text';
// eslint-disable-next-line import/no-cycle
import { useForm } from './Form';

export type ErrorProps = {
  name: string;
  className?: string;
  styles?: TextProps['styles'];
  elementType?: TextProps['elementType'];
};

export const Error = ({ className, name, styles, elementType }: ErrorProps) => {
  const { errors } = useForm();
  const error = errors?.[name];

  // TODO: add role="alert"?

  return error ? (
    <Text slot="error" className={className} elementType={elementType} styles={styles}>
      {error.message}
    </Text>
  ) : null;
};
