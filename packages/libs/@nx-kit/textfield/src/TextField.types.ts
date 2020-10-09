import { SyntheticEvent } from 'react';
import { InputBaseProps } from '@nx-kit/types';
import { Theme, Spacing, FlexItem, Position, Color, Layout, Font, Typo } from '@nx-kit/styling';

export type TextFieldSkin = keyof Theme['component']['textfield']['skin'];
type Styles = Spacing & FlexItem & Position & Color & Layout & Font & Typo;

export type TextFieldType = 'text' | 'textarea' | 'password';

export type TextFieldProps = InputBaseProps & {
  id?: string;
  type?: TextFieldType;
  value?: string;
  isRequired?: boolean;
  onChange?: (event: SyntheticEvent) => void;
  onBlur?: (event: SyntheticEvent) => void;
};

export type TextFieldStyledProps = {
  skin?: TextFieldSkin;
  styles?: Styles;
  isFocused: boolean;
  isDisabled: boolean;
  hasError: boolean;
};
