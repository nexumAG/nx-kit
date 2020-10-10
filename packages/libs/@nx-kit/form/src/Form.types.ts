import React from 'react';
import { ResolverResult } from 'react-hook-form';

export type FormProps = {
  children: React.ReactNode;
  mode?: 'onChange' | 'onBlur' | 'onSubmit' | 'onTouched' | 'all';
  reValidateMode?: 'onChange' | 'onBlur' | 'onSubmit';
  defaultValues?: Record<string, any>;

  resolver?: (values: any, context?: object) => Promise<ResolverResult> | ResolverResult;
  context?: any;

  criteriaMode?: 'firstError' | 'all';
  shouldFocusError?: boolean;
  shouldUnregister?: boolean;

  onSubmit?: any;
  setWatchers?: ((watcher: any) => void)[];
};
