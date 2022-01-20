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
  hasError?: boolean;
  slot?: string;
} & Omit<AriaSelectProps<object>, 'label'>;

export type SelectStyledProps = {
  skin?: SelectSkin;
  styles?: Styles;
  isOpen: boolean;
  isFocused: boolean;
  hasError: boolean;
  isDisabled: boolean;
  isHovered: boolean;
  isActive: boolean;
};
