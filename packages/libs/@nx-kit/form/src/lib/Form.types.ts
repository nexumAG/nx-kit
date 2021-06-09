import React from 'react';

export type FormProps = {
  children: React.ReactNode;
  mode?: 'onChange' | 'onBlur' | 'onSubmit' | 'onTouched' | 'all';
  reValidateMode?: 'onChange' | 'onBlur' | 'onSubmit';
  defaultValues?: any;

  criteriaMode?: 'firstError' | 'all';
  shouldFocusError?: boolean;
  shouldUnregister?: boolean;

  onSubmit?: any;
  onChange?: any;
};

export type FormContextValue = {
  register: (name: string, values?: any) => { onChange: (value: any) => void; onBlur: () => void };
  unregister: (name: string) => void;
  defaultValues: any;
};
