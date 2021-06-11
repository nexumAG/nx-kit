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
  register: (
    name: string,
    id: string,
    value?: any,
    validation?: any
  ) => { onChange: (value: any) => void; onBlur: () => void; runValidation: (value: any) => any };
  unregister: (name: string, id: string) => void;
  setFieldState: (id: string, state: FieldState | null) => void;
  defaultValues: any;
};

export type FieldState = {
  valid: boolean;
};

export type FieldStates = {
  [id: string]: {
    valid: boolean;
  };
};

type ValidationRequired = {
  type: 'required';
  value: boolean;
};

type ValidationMinLength = {
  type: 'minLength';
  value: number;
};

type ValidationMaxLength = {
  type: 'maxLength';
  value: number;
};

type ValidationMin = {
  type: 'min';
  value: number;
};

type ValidationMax = {
  type: 'max';
  value: number;
};

type ValidationPattern = {
  type: 'pattern';
  value: RegExp;
};

type ValidationValidate = {
  type: 'validate';
  value: (value: any) => boolean;
};

type ValidationMethods =
  | ValidationRequired
  | ValidationMinLength
  | ValidationMaxLength
  | ValidationMin
  | ValidationMax
  | ValidationPattern
  | ValidationValidate;

export type Validation = (ValidationMethods & {
  message?: string;
})[];
