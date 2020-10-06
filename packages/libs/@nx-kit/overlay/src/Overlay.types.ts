import React from 'react';
import { OverlayProps as AriaOverlayProps } from '@react-aria/overlays';
import { AriaDialogProps } from '@react-types/dialog';

export type TransitionStates = 'entering' | 'entered' | 'exiting' | 'exited';

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
} & AriaOverlayProps &
  AriaDialogProps;

export type OverlayInnerProps = OverlayProps & OverlayTransitionProps;

export type OverlayStyledProps = {
  isFocused: boolean;
  skin?: string;
  state?: TransitionStates;
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
