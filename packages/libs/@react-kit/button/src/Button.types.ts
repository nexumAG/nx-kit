import { AriaButtonProps } from '@react-types/button';
import {
  Theme,
  Spacing,
  FlexItem,
  Position,
  Color,
  Layout,
  Font,
  Typo,
  As,
} from '@react-kit/styling';

type Styles = Spacing & FlexItem & Position & Color & Layout & Font & Typo;
type ButtonSkin = keyof Theme['component']['button']['skin'];

export interface ButtonProps extends AriaButtonProps {
  className?: string;
  skin?: ButtonSkin;
  styles?: Styles;
  as?: As;
}

export type ButtonStyledProps = {
  skin?: ButtonSkin;
  styles?: Styles;
  isDisabled: boolean;
  isActive: boolean;
  isHovered: boolean;
  isFocus: boolean;
};
