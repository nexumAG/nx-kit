import { ReactNode } from 'react';
import { FieldBaseProps } from '@nx-kit/types';
import {
  Spacing,
  FlexItem,
  Position,
  Color,
  Layout,
  Font,
  Typo,
  CheckboxSkins,
  DefaultTheme,
} from '@nx-kit/styling';

// @ts-ignore
export type CheckboxSkin = CheckboxSkins<DefaultTheme>;
type Styles = Spacing & FlexItem & Position & Color & Layout & Font & Typo;

export type CheckboxProps = FieldBaseProps<
  boolean | string | string[],
  Styles,
  HTMLInputElement
> & {
  isIndeterminate?: boolean;
  isChecked?: boolean;
  defaultChecked?: boolean;
  children?: ReactNode;
  render?: (props: {
    isFocused: boolean;
    isDisabled: boolean;
    hasError: boolean;
    isChecked: boolean;
    setChecked: (isChecked: boolean) => void;
  }) => React.ReactNode;
};

export type CheckboxStyledProps = {
  skin?: CheckboxSkin;
  styles?: Styles;
  isFocused: boolean;
  isDisabled: boolean;
  hasError: boolean;
};
