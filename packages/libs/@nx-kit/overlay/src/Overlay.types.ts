import { CSSProperties, ReactNode } from 'react';
import { OverlayProps as AriaOverlayProps } from '@react-aria/overlays';
import { AriaDialogProps } from '@react-types/dialog';
import {
  Spacing,
  Position,
  Color,
  Layout,
  Font,
  Typo,
  OverlaySkins,
  DefaultTheme,
} from '@nx-kit/styling';

export type TransitionStates = 'entering' | 'entered' | 'exiting' | 'exited';

type Styles = Spacing & Position & Color & Layout & Font & Typo;

// @ts-ignore
type OverlaySkin = OverlaySkins<DefaultTheme>;

export type OverlayTransitionProps = {
  state: TransitionStates;
};

export type OverlayProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
  skin?: OverlaySkin;
  verticalAlignment?: 'top' | 'center' | 'bottom';
  horizontalAlignment?: 'left' | 'center' | 'right';
  /**
   * If disabled the Overlay wrapper will not be rendered.
   * @default false
   */
  alignmentDisabled?: boolean;
  /**
   * If disabled the Overlay will not get rendered if closed.
   * @default false
   */
  animationDisabled?: boolean;
  styles?: Styles;
  style?: CSSProperties;
  onOpened?: () => void;
  onClosed?: () => void;
  focusRestore?: boolean;
  focusContain?: boolean;
  focusAuto?: boolean;
  underlayShow?: boolean;
  underlay?: ReactNode;
  preventScroll?: boolean;
  renderInPortal?: boolean;
} & AriaOverlayProps &
  AriaDialogProps;

export type OverlayInnerProps = Omit<
  OverlayProps,
  'onOpened' | 'onClosed' | 'renderInPortal' | 'animationDisabled'
> &
  OverlayTransitionProps;

export type OverlayStyledProps = {
  isFocused: boolean;
  skin?: OverlaySkin;
  state?: TransitionStates;
  styles?: Styles;
};

export type OverlayTriggerProps = {
  children:
    | ((props: { isOpen: boolean; close: () => void; open: () => void }) => ReactNode)
    | ReactNode;
  isOpen?: boolean;
};

export type OverlayWrapperStyledProps = {
  alignItems: string;
  justifyContent: string;
};

export type UnderlayStyledProps = {
  state?: TransitionStates;
};
