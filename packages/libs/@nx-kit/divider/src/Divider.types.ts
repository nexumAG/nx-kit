import { SeparatorProps } from '@react-aria/separator';
import { Theme, Spacing, FlexItem, Position, Color } from '@nx-kit/styling';

export type DividerSkin = keyof Theme['component']['divider']['skin'];
type Styles = Spacing & FlexItem & Position & Color;

export type DividerProps = {
  className?: string;
  skin?: DividerSkin;
  styles?: Styles;
} & SeparatorProps;

export type DividerStyledProps = {
  skin?: DividerSkin;
  styles?: Styles;
  orientation?: SeparatorProps['orientation'];
};
