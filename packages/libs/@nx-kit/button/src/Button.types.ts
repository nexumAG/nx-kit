import { AriaButtonProps } from '@react-types/button';
import {
  Spacing,
  FlexItem,
  Position,
  Color,
  Layout,
  Font,
  Typo,
  ButtonSkins,
  DefaultTheme,
} from '@nx-kit/styling';

type Styles = Spacing & FlexItem & Position & Color & Layout & Font & Typo;
// @ts-ignore
type ButtonSkin = ButtonSkins<DefaultTheme>;

export interface ButtonProps extends AriaButtonProps<keyof JSX.IntrinsicElements> {
  id?: string;
  className?: string;
  skin?: ButtonSkin;
  styles?: Styles;
  slot?: string;
}

export type ButtonStyledProps = {
  skin?: ButtonSkin;
  styles?: Styles;
  isDisabled: boolean;
  isActive: boolean;
  isHovered: boolean;
  isFocused: boolean;
};
