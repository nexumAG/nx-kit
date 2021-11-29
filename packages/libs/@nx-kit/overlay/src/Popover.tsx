import React, { forwardRef, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import { useDialog } from '@react-aria/dialog';
import { useOverlayTriggerState } from '@react-stately/overlays';
import { FocusScope, useFocusRing } from '@react-aria/focus';
import {
  OverlayContainer,
  useModal,
  useOverlay,
  DismissButton,
  useOverlayTrigger,
  useOverlayPosition,
} from '@react-aria/overlays';
import { mergeProps } from '@react-aria/utils';
import { SlotProvider, useSlotProps } from '@nx-kit/slot';
import { useEffectExceptOnMount } from '@nx-kit/utils';
import { TransitionStates } from './Overlay.types';
import { PopoverInnerProps, PopoverProps, PopoverTriggerProps } from './Popover.types';
import { OverlayStyled } from './Overlay';

const PopoverInner = forwardRef(
  (
    { onClose, isOpen, children, state, ...props }: PopoverInnerProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const { overlayProps } = useOverlay(
      {
        onClose,
        isOpen,
        isDismissable: true,
      },
      // @ts-ignore
      ref
    );

    const { modalProps } = useModal();

    // @ts-ignore
    const { dialogProps, titleProps } = useDialog({}, ref);

    const { isFocusVisible, focusProps } = useFocusRing();

    const slots = {
      heading: titleProps,
    };

    return (
      <FocusScope restoreFocus>
        <OverlayStyled
          isFocused={isFocusVisible}
          ref={ref}
          state={state as TransitionStates}
          {...mergeProps(overlayProps, dialogProps, props, modalProps, focusProps)}
        >
          <SlotProvider slots={slots}>{children}</SlotProvider>
          <DismissButton onDismiss={onClose} />
        </OverlayStyled>
      </FocusScope>
    );
  }
);

export const Popover = forwardRef((popoverProps: PopoverProps, ref?: React.Ref<HTMLDivElement>) => {
  const { onOpened, onClosed, ...props } = useSlotProps<PopoverProps>('popover', popoverProps);
  const { isOpen, animationDisabled, renderInPortal = true } = props;

  useEffect(() => {
    if (isOpen && onOpened) {
      onOpened();
    }
  }, []);

  useEffectExceptOnMount(() => {
    if (isOpen && onOpened) {
      onOpened();
    } else if (onClosed) {
      onClosed();
    }
  }, [isOpen]);

  if (animationDisabled && !isOpen) {
    return null;
  }

  return (
    <Transition in={isOpen} timeout={{ enter: 0, exit: 350 }} unmountOnExit mountOnEnter>
      {(state) =>
        renderInPortal ? (
          <OverlayContainer>
            <PopoverInner ref={ref} {...props} state={state as TransitionStates} />
          </OverlayContainer>
        ) : (
          <PopoverInner ref={ref} {...props} state={state as TransitionStates} />
        )
      }
    </Transition>
  );
});

export const PopoverTrigger = ({
  children: triggerChildren,
  isOpen: isOpenDefault = false,
  placement = 'top',
  offset = 5,
  behaviour = 'hideOnScroll',
}: PopoverTriggerProps) => {
  const state = useOverlayTriggerState({ defaultOpen: isOpenDefault });

  const triggerRef = React.useRef(null);
  const overlayRef = React.useRef(null);

  const { overlayProps: positionProps, updatePosition } = useOverlayPosition({
    targetRef: triggerRef,
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

  const slots = {
    button: { onPress: () => state.toggle(), ref: triggerRef, ...triggerProps },
    popover: {
      isOpen: state.isOpen,
      onClose: state.close,
      ref: overlayRef,
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
