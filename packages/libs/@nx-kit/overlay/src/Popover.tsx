import React, { forwardRef, useCallback } from 'react';
import { useOverlayTriggerState } from '@react-stately/overlays';
import { DismissButton, useOverlayTrigger, useOverlayPosition } from '@react-aria/overlays';
import { SlotProvider } from '@nx-kit/slot';
import { PopoverProps, PopoverTriggerProps } from './Popover.types';
import { Overlay } from './Overlay';

export const Popover = forwardRef((popoverProps: PopoverProps, ref?: React.Ref<HTMLDivElement>) => (
  <Overlay
    ref={ref}
    alignmentDisabled
    preventScroll={false}
    focusContain={false}
    focusAuto={false}
    focusRestore
    underlayShow={false}
    isDismissable
    {...popoverProps}
  />
));

export const PopoverTrigger = ({
  children: triggerChildren,
  isOpen: isOpenDefault = false,
  placement = 'top',
  offset = 5,
  behaviour = 'hideOnScroll',
  positionElement,
}: PopoverTriggerProps) => {
  const state = useOverlayTriggerState({ defaultOpen: isOpenDefault });

  const triggerRef = React.useRef(null);
  const overlayRef = React.useRef<HTMLDivElement | null>(null);
  const positionRef = React.useRef<HTMLElement | null>(positionElement ?? null);
  positionRef.current = positionElement ?? null;

  const { overlayProps: positionProps, updatePosition } = useOverlayPosition({
    targetRef: positionRef.current ? positionRef : triggerRef,
    overlayRef,
    placement,
    offset,
    isOpen: state.isOpen,
  });

  // https://github.com/adobe/react-spectrum/issues/1852

  // Get props for the trigger and overlay. This also handles
  // hiding the overlay when a parent element of the trigger scrolls
  // (which invalidates the popover positioning).
  let overlayTriggerState = state;

  if (behaviour === 'stayOnScroll' || behaviour === 'stayOnScrollNoPortal') {
    overlayTriggerState = { ...state, close: () => {} };
  } else if (behaviour === 'updateOnScroll') {
    overlayTriggerState = { ...state, close: updatePosition };
  }

  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    overlayTriggerState,
    triggerRef
  );

  // Hack, see: https://github.com/adobe/react-spectrum/issues/3490
  const overlayRefCallback = useCallback(
    (ref: HTMLDivElement) => {
      overlayRef.current = ref;
      updatePosition();
    },
    [overlayRef, updatePosition]
  );

  const slots = {
    button: { onPress: () => state.toggle(), ref: triggerRef, ...triggerProps },
    overlay: {
      isOpen: state.isOpen,
      onClose: state.close,
      ref: overlayRefCallback,
      renderInPortal: behaviour !== 'stayOnScrollNoPortal',
      ...positionProps,
      ...overlayProps,
    },
  };

  const children =
    typeof triggerChildren === 'function'
      ? triggerChildren({
          isOpen: state.isOpen,
          close: state.close,
          open: state.open,
          toggle: state.toggle,
        })
      : triggerChildren;

  return <SlotProvider slots={slots}>{children}</SlotProvider>;
};

export { DismissButton };
