import { ReactNode } from 'react';

export type ButtonProps = {
  className?: string;
  isDisabled?: boolean;
  children?: ReactNode;
  as?: any;
  [key: string]: any;
};
