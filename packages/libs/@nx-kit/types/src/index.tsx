import { SyntheticEvent } from 'react';

export type FieldBaseProps<T, Styles> = InputInterface<T> & {
  id?: string;

  placeholder?: string;
  validation?: any;

  slot?: string;
  skin?: string;
  styles?: Styles;
  className?: string;

  autoFocus?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
};

export interface InputInterface<T = any> {
  ref?: any;
  name?: string;
  defaultValue?: T;
  value?: T;
  error?: any;

  isAriaRequired?: boolean;
  ariaLabel?: string;

  onChange?: (event: SyntheticEvent) => void;
  onBlur?: (event: SyntheticEvent) => void;
}
