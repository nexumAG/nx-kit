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
  className?: string;
  skin?: string;

  name: string;
  type: InputType;
  defaultValue?: string;
  placeholder?: string;
  autoFocus?: boolean;

  isDisabled?: boolean;
  isReadOnly?: boolean;

  validation?: any;
  error?: string;
};
