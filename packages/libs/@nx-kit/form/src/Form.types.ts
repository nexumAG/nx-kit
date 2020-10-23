import React from 'react';
import { ResolverResult } from 'react-hook-form';

export type FormProps = {
  children: React.ReactNode | ((values: FormContextValue) => React.ReactNode);
  mode?: 'onChange' | 'onBlur' | 'onSubmit' | 'onTouched' | 'all';
  reValidateMode?: 'onChange' | 'onBlur' | 'onSubmit';
  defaultValues?: Record<string, any>;

  resolver?: (values: any, context?: object) => Promise<ResolverResult> | ResolverResult;
  context?: any;

  criteriaMode?: 'firstError' | 'all';
  shouldFocusError?: boolean;
  shouldUnregister?: boolean;

  onSubmit?: any;
};

export type FormContextValue = {
  register: any;
  errors: Record<string, any>;
  defaultValues: any;
  reset: (values?: Record<string, any>, omitResetState?: Record<string, boolean>) => void;
  watch: (names?: string | string[]) => any;
  getValues: (payload?: string | string[]) => any;
  clearErrors: (name?: string | string[]) => void;
  setError: (
    name: string,
    error: { type?: string; types?: any; message?: string; shouldFocus?: boolean }
  ) => void;
  unregister: (name: string | string[]) => void;
  trigger: (payload?: string | string[]) => Promise<boolean>;
};
