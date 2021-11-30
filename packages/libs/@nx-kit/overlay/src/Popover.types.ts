import React from 'react';
import { Placement } from '@react-types/overlays';
import { OverlayProps } from './Overlay.types';

export type PopoverProps = Omit<
  OverlayProps,
  'verticalAlignment' | 'horizontalAlignment' | 'alignmentDisabled'
>;

export type PopoverBehaviour =
  | 'hideOnScroll'
  | 'updateOnScroll'
  | 'stayOnScroll'
  | 'stayOnScrollNoPortal';

export type PopoverTriggerProps = {
  children:
    | ((props: {
        isOpen: boolean;
        close: () => void;
        open: () => void;
        toggle: () => void;
      }) => React.ReactNode)
    | React.ReactNode;
  isOpen?: boolean;
  placement?: Placement;
  offset?: number;
  behaviour?: PopoverBehaviour;
  positionElement?: HTMLElement;
};
