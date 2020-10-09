import React from 'react';
import { useForm } from './Form';

export type ErrorProps = {
  name: string;
};

export const Error = ({ name }: ErrorProps) => {
  const { errors } = useForm();
  return errors?.[name] ? <span>Error</span> : null;
};
