import { SeparatorProps } from '@react-aria/separator';
import { Spacing, FlexItem, Position, Color, DividerSkins, DefaultTheme } from '@nx-kit/styling';

// @ts-ignore
export type DividerSkin = DividerSkins<DefaultTheme>;
type Styles = Spacing & FlexItem & Position & Color;

export type DividerProps = {
  id?: string;
  className?: string;
  skin?: DividerSkin;
  styles?: Styles;
} & SeparatorProps;

export type DividerStyledProps = {
  skin?: DividerSkin;
  styles?: Styles;
  orientation?: SeparatorProps['orientation'];
};
