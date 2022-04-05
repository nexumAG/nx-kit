import { ReactNode } from 'react';
import { AriaLinkProps } from '@react-types/link';
import {
  Spacing,
  FlexContainer,
  FlexItem,
  Position,
  Color,
  Layout,
  Font,
  Typo,
  LinkSkins,
  DefaultTheme,
} from '@nx-kit/styling';

type Styles = Spacing & FlexContainer & FlexItem & Position & Color & Layout & Font & Typo;
// @ts-ignore
type LinkSkin = LinkSkins<DefaultTheme>;

// all a attributes
// type HtmlLinkProps = LinkHTMLAttributes<HTMLLinkElement>;

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
  isPressed: boolean;
};
