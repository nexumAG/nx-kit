import type { AriaSelectProps } from '@react-types/select';
import {
  Spacing,
  FlexItem,
  Position,
  Color,
  Layout,
  Font,
  Typo,
  DefaultTheme,
  SelectSkins,
} from '@nx-kit/styling';

// @ts-ignore
type SelectSkin = SelectSkins<DefaultTheme>;
type Styles = Spacing & FlexItem & Position & Color & Layout & Font & Typo;

export type SelectProps = {
  className?: string;
  skin?: SelectSkin;
  styles?: Styles;
} & AriaSelectProps<object>;

export type SelectStyledProps = {
  skin?: SelectSkin;
  styles?: Styles;
  isOpen: boolean;
  isFocusVisible: boolean;
};
