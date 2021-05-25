import React, { SyntheticEvent } from 'react';

export type FieldBaseProps<T, Styles> = InputInterface<T> & {
  id?: string;
  value?: T;

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

  isAriaRequired?: boolean;
  ariaLabel?: string;

  // onChange?: (event: SyntheticEvent) => void;
  // onBlur?: (event: SyntheticEvent) => void;
};

export interface InputInterface<T = any> {
  ref?: React.Ref<any>;
  name?: string;
  defaultValue?: T;
  hasError?: boolean;
  onChange?: (event: SyntheticEvent) => void;
  onBlur?: (event: SyntheticEvent) => void;
}
