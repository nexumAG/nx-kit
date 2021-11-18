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

export type PopoverBehaviour = 'hideOnScroll' | 'alwaysShow' | 'noPortal';

export type PopoverTriggerProps = {
  children: ((props: { isOpen: boolean; close: () => void }) => React.ReactNode) | React.ReactNode;
  isOpen?: boolean;
  placement?: Placement;
  offset?: number;
  behaviour?: PopoverBehaviour;
};
