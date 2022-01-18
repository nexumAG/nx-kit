import type { AriaSelectProps } from '@react-types/select';
import { DefaultTheme, SelectSkins } from '@nx-kit/styling';

// @ts-ignore
type SelectSkin = SelectSkins<DefaultTheme>;

export type SelectProps = {
  className?: string;
  skin?: SelectSkin;
} & AriaSelectProps<object>;

export type SelectStyledProps = {
  skin?: SelectSkin;
  isOpen: boolean;
  isFocusVisible: boolean;
};
