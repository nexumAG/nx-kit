import { SyntheticEvent } from 'react';
import { Theme, Spacing, FlexItem, Position, Color, Layout, Font, Typo } from '@nx-kit/styling';

export type TextFieldSkin = keyof Theme['component']['textfield']['skin'];
type Styles = Spacing & FlexItem & Position & Color & Layout & Font & Typo;

export type TextFieldProps = {
  id?: string;
  className?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  readOnly?: boolean;
  placeholder?: string;
  isTextArea?: boolean;
  autoFocus?: boolean;
  isDisabled?: boolean;
  onChange?: (event: SyntheticEvent) => void;
  isRequired?: boolean;
  error?: string;
  slot?: string;
  skin?: TextFieldSkin;
  styles?: Styles;
};

export type TextFieldStyledProps = {
  skin?: TextFieldSkin;
  styles?: Styles;
  isFocused: boolean;
  isDisabled: boolean;
  hasError: boolean;
};
