import { AriaLinkProps } from '@react-types/link';
import { Theme, Spacing, FlexItem, Position, Color, Layout, Font, Typo } from '@react-kit/styling';

type Styles = Spacing & FlexItem & Position & Color & Layout & Font & Typo;
type LinkSkin = keyof Theme['component']['link']['skin'];

export interface LinkProps extends AriaLinkProps {
  className?: string;
  skin?: LinkSkin;
  styles?: Styles;
}

export type LinkStyledProps = {
  skin?: LinkSkin;
  styles?: Styles;
  isHovered: boolean;
  isFocus: boolean;
};
