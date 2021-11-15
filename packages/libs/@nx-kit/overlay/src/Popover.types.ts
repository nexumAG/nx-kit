import React from 'react';
import { Placement } from '@react-types/overlays';
import { OverlayProps, OverlayTransitionProps } from './Overlay.types';

export type PopoverProps = Omit<
  OverlayProps,
  | 'verticalAlignment'
  | 'horizontalAlignment'
  | 'isDismissable'
  | 'shouldCloseOnBlur'
  | 'isKeyboardDismissDisabled'
  | 'shouldCloseOnInteractOutside'
>;

export type PopoverInnerProps = PopoverProps & OverlayTransitionProps;

export type PopoverTriggerProps = {
  children: React.ReactNode;
  isOpen?: boolean;
  placement?: Placement;
  offset?: number;
};
