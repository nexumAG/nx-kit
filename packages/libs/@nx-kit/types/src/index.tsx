import { SyntheticEvent } from 'react';

export type FieldBaseProps<T, Styles> = {
  id?: string;
  name?: string;

  label?: string;
  placeholder?: string;
  defaultValue?: T;
  value?: T;
  validation?: any;

  slot?: string;
  skin?: string;
  styles?: Styles;
  className?: string;

  autoFocus?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  error?: any;

  onChange?: (event: SyntheticEvent) => void;
  onBlur?: (event: SyntheticEvent) => void;
};

export interface InputInterface<T = any> {
  name?: string;
  ref?: any;
  value?: T;
  defaultValue?: T;
  error?: any;

  onChange?: (event: SyntheticEvent) => void;
  onBlur?: (event: SyntheticEvent) => void;
}
