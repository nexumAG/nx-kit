import { ReactNode } from 'react';
import { AriaLinkProps } from '@react-types/link';
import {
  Spacing,
  FlexItem,
  Position,
  Color,
  Layout,
  Font,
  Typo,
  LinkSkins,
  DefaultTheme,
} from '@nx-kit/styling';

type Styles = Spacing & FlexItem & Position & Color & Layout & Font & Typo;
// @ts-ignore
type LinkSkin = LinkSkins<DefaultTheme>;

export interface LinkProps extends AriaLinkProps {
  id?: string;
  className?: string;
  children: ReactNode;
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
