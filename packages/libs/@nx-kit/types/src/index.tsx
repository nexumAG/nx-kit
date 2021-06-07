import React, { SyntheticEvent } from 'react';

export type FieldBaseProps<T, Styles, E> = InputInterface<T, E> & {
  id?: string;
  value?: string;

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

  'aria-label'?: string;
};

export interface InputInterface<T = any, E = HTMLElement> {
  ref?: React.Ref<any>;
  name?: string;
  defaultValue?: T;
  hasError?: boolean;
  onChange?: (event: SyntheticEvent<E>) => void;
  onBlur?: (event: SyntheticEvent<E>) => void;
}
