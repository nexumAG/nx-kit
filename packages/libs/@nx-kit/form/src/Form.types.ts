import React from 'react';

export type FormProps = {
  children: (errors: any) => React.ReactNode;
  mode?: 'onChange' | 'onBlur' | 'onSubmit' | 'onTouched' | 'all';
  defaultValues?: any;
  onSubmit?: any;
  onWatch?: any;
};
