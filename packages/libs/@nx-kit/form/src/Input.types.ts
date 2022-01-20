import React from 'react';
import { InputInterface } from '@nx-kit/types';

export type InputProps = {
  name: string;
  field: React.ReactElement<InputInterface>;
  validation?: any;
  passHasError?: boolean;
};
