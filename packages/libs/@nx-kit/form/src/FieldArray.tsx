import React, { ReactNode } from 'react';
import { useFieldArray, UseFieldArrayReturn } from 'react-hook-form';
// eslint-disable-next-line import/no-cycle
import { useForm } from './Form';

export type FieldArrayProps = {
  name: string;
  children: (props: UseFieldArrayReturn) => ReactNode;
};

export const FieldArray = ({ name, children }: FieldArrayProps) => {
  const { control } = useForm();
  const { fields, insert, move, prepend, remove, replace, swap, update, append } = useFieldArray({
    control,
    name,
  });

  return <>{children({ fields, insert, move, prepend, remove, replace, swap, update, append })}</>;
};
