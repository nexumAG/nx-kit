export enum InputType {
  text = 'text',
  textarea = 'textarea',
  checkbox = 'checkbox',
  checkboxes = 'checkboxes',
  radio = 'radio',
  radios = 'radios',
  select = 'select',
  switch = 'switch',
}
export type InputProps = {
  className?: string;
  skin?: string;

  name?: string;
  type: string;
  defaultValue?: string;
  placeholder?: string;
  autoFocus?: boolean;

  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;

  validation?: any;
  error?: string;
};
