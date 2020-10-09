import { SyntheticEvent } from 'react';
import { InputBaseProps } from '@nx-kit/types';
import { Theme, Spacing, FlexItem, Position, Color, Layout, Font, Typo } from '@nx-kit/styling';

export type CheckboxSkin = keyof Theme['component']['checkbox']['skin'];
type Styles = Spacing & FlexItem & Position & Color & Layout & Font & Typo;

export type CheckboxProps = InputBaseProps & {
  id?: string;
  value?: string;
  children?: React.ReactNode;
  isRequired?: boolean;
  isIndeterminate?: boolean;
  onChange?: (event: SyntheticEvent) => void;
  onBlur?: (event: SyntheticEvent) => void;
};

export type CheckboxStyledProps = {
  skin?: CheckboxSkin;
  styles?: Styles;
  isFocused: boolean;
  isDisabled: boolean;
  hasError: boolean;
};
