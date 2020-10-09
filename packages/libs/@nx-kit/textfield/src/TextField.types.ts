import { SyntheticEvent } from 'react';
import { Theme, Spacing, FlexItem, Position, Color, Layout, Font, Typo } from '@nx-kit/styling';

export type TextFieldSkin = keyof Theme['component']['textfield']['skin'];
type Styles = Spacing & FlexItem & Position & Color & Layout & Font & Typo;

export type TextFieldType = 'text' | 'textarea' | 'password';

export type TextFieldProps = {
  id?: string;
  className?: string;
  name?: string;
  type: TextFieldType;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  autoFocus?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  error?: string;
  slot?: string;
  skin?: TextFieldSkin;
  styles?: Styles;
  onChange?: (event: SyntheticEvent) => void;
  onBlur?: (event: SyntheticEvent) => void;
  validation?: any;
};

export type TextFieldStyledProps = {
  skin?: TextFieldSkin;
  styles?: Styles;
  isFocused: boolean;
  isDisabled: boolean;
  hasError: boolean;
};
