import React, { useContext } from 'react';
import { FormProps } from '../Form.types';

const Form = ({
  children,
  mode = 'onSubmit',
  reValidateMode = 'onChange',
  defaultValues,
  onSubmit,
  ...rest
}: FormProps) => {
  return <form>{children}</form>;
};

export { Form };
