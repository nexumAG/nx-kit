import React from 'react';
import { OverlayProps as AriaOverlayProps } from '@react-aria/overlays';
import { AriaDialogProps } from '@react-types/dialog';

export type OverlayProps = {
  className?: string;
  title?: string;
  children?: React.ReactNode;
} & AriaOverlayProps &
  AriaDialogProps;

export type OverlayStyledProps = {
  isFocused: boolean;
};

export type OverlayTriggerProps = {
  children: (props: { isOpen: boolean; close: () => void }) => React.ReactNode;
};
