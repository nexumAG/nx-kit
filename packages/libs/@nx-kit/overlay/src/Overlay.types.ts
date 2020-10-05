import React from 'react';
import { OverlayProps as AriaOverlayProps } from '@react-aria/overlays';
import { AriaDialogProps } from '@react-types/dialog';

export type OverlayProps = {
  className?: string;
  title?: string;
  children?: React.ReactNode;
  skin?: string;
  verticalAlignment?: 'top' | 'center' | 'bottom';
  horizontalAlignment?: 'left' | 'center' | 'right';
} & AriaOverlayProps &
  AriaDialogProps;

export type OverlayStyledProps = {
  isFocused: boolean;
  skin?: string;
};

export type OverlayTriggerProps = {
  children: (props: { isOpen: boolean; close: () => void }) => React.ReactNode;
};

export type UnderlayStyledProps = {
  alignItems: string;
  justifyContent: string;
};
