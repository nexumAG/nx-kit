import React from 'react';
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
  title?: string;
  children?: React.ReactNode;
  skin?: OverlaySkin;
  verticalAlignment?: 'top' | 'center' | 'bottom';
  horizontalAlignment?: 'left' | 'center' | 'right';
  animationDisabled?: boolean;
  styles?: Styles;
} & AriaOverlayProps &
  AriaDialogProps;

export type OverlayInnerProps = OverlayProps & OverlayTransitionProps;

export type OverlayStyledProps = {
  isFocused: boolean;
  skin?: string;
  state?: TransitionStates;
  styles?: Styles;
};

export type OverlayTriggerProps = {
  children: (props: { isOpen: boolean; close: () => void }) => React.ReactNode;
  isOpen?: boolean;
};

export type OverlayWrapperStyledProps = {
  alignItems: string;
  justifyContent: string;
};

export type UnderlayStyledProps = {
  state?: TransitionStates;
};
