import { InputBaseProps } from '@nx-kit/types';

export type InputType =
  | 'text'
  | 'password'
  | 'textarea'
  | 'checkbox'
  | 'checkboxes'
  | 'radio'
  | 'radios'
  | 'select'
  | 'switch';

export type InputProps = {
  type: InputType;
} & InputBaseProps;
