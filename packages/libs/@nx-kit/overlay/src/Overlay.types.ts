import React from 'react';
import { OverlayProps as AriaOverlayProps } from '@react-aria/overlays';
import { AriaDialogProps } from '@react-types/dialog';
import { Spacing, Position, Color, Layout, Font, Typo } from '@nx-kit/styling';

export type TransitionStates = 'entering' | 'entered' | 'exiting' | 'exited';

type Styles = Spacing & Position & Color & Layout & Font & Typo;

export type OverlayTransitionProps = {
  state: TransitionStates;
};

export type OverlayProps = {
  className?: string;
  title?: string;
  children?: React.ReactNode;
  skin?: string;
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
