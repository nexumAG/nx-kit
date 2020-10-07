import { AriaLinkProps } from '@react-types/link';
import { Theme, Spacing, FlexItem, Position, Color, Layout, Font, Typo } from '@nx-kit/styling';

type Styles = Spacing & FlexItem & Position & Color & Layout & Font & Typo;
type LinkSkin = keyof Theme['component']['link']['skin'];

export interface LinkProps extends AriaLinkProps {
  id?: string;
  className?: string;
  skin?: LinkSkin;
  styles?: Styles;
  slot?: string;
}

export type LinkStyledProps = {
  skin?: LinkSkin;
  styles?: Styles;
  isHovered: boolean;
  isFocused: boolean;
};
