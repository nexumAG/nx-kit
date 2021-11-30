import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import {
  useOverlay,
  usePreventScroll,
  useModal,
  OverlayProvider,
  OverlayContainer,
} from '@react-aria/overlays';
import { useDialog } from '@react-aria/dialog';
import { FocusScope, useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import {
  styled,
  getSpacing,
  getPosition,
  getColor,
  getLayout,
  getFont,
  getTypo,
  compose,
} from '@nx-kit/styling';
import { SlotProvider, useSlotProps } from '@nx-kit/slot';
import { mergeRefs, useEffectExceptOnMount } from '@nx-kit/utils';
import {
  OverlayProps,
  OverlayStyledProps,
  OverlayTriggerProps,
  OverlayWrapperStyledProps,
  UnderlayStyledProps,
  TransitionStates,
  OverlayInnerProps,
} from './Overlay.types';

export const Underlay = styled.div<UnderlayStyledProps>`
  ${({ theme }) => theme?.global?.underlay};
`;

export const OverlayStyled = styled.div<OverlayStyledProps>`
  ${({ theme }) => theme?.component?.overlay?.global};
  ${({ theme, skin }) => skin && theme?.component?.overlay?.skin?.[skin]};
  ${compose(getSpacing, getPosition, getColor, getLayout, getTypo)}
  ${getFont};
`;

export const OverlayWrapper = styled.div<OverlayWrapperStyledProps>`
  ${({ theme }) => theme?.global?.overlayWrapper};
`;

const OverlayInner = forwardRef((props: OverlayInnerProps, ref?: React.Ref<HTMLDivElement>) => {
  const {
    children,
    className,
    verticalAlignment = 'center',
    horizontalAlignment = 'center',
    alignmentDisabled = false,
    state,
    focusContain = true,
    focusAuto = true,
    focusRestore = true,
    underlayShow = true,
    underlay,
    preventScroll = true,
    ...rest
  } = props;

  const localRef = React.useRef(null);
  const { overlayProps: useOverlayProps } = useOverlay(props, localRef);
  const { modalProps } = useModal();
  const { dialogProps, titleProps } = useDialog(props, localRef);
  const { isFocusVisible, focusProps } = useFocusRing();
  usePreventScroll({ isDisabled: !preventScroll });

  const slots = {
    heading: titleProps,
  };

  const justifyContent = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  };

  const alignItems = {
    top: 'flex-start',
    center: 'center',
    bottom: 'flex-end',
  };

  const alignment = {
    justifyContent: justifyContent[horizontalAlignment],
    alignItems: alignItems[verticalAlignment],
  };

  const mergedRefs = useCallback(mergeRefs<HTMLElement | null>(ref, localRef), [ref]);

  const overlay = (
    <FocusScope contain={focusContain} restoreFocus={focusRestore} autoFocus={focusAuto}>
      <OverlayStyled
        className={className}
        isFocused={isFocusVisible}
        ref={mergedRefs}
        state={state as TransitionStates}
        {...mergeProps(useOverlayProps, dialogProps, modalProps, focusProps, rest)}
      >
        <SlotProvider slots={slots}>{children}</SlotProvider>
      </OverlayStyled>
    </FocusScope>
  );

  return (
    <>
      {underlayShow && (underlay ?? <Underlay state={state as TransitionStates} />)}
      {alignmentDisabled ? overlay : <OverlayWrapper {...alignment}>{overlay}</OverlayWrapper>}
    </>
  );
});

export const Overlay = forwardRef((overlayProps: OverlayProps, ref?: React.Ref<HTMLDivElement>) => {
  const {
    onOpened,
    onClosed,
    animationDisabled = false,
    renderInPortal = true,
    ...props
  } = useSlotProps<OverlayProps>('overlay', overlayProps);
  const { isOpen } = props;

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
            <OverlayInner ref={ref} {...props} state={state as TransitionStates} />
          </OverlayContainer>
        ) : (
          <OverlayInner ref={ref} {...props} state={state as TransitionStates} />
        )
      }
    </Transition>
  );
});

export const OverlayTrigger = ({
  children: triggerChildren,
  isOpen: isOpenDefault = false,
}: OverlayTriggerProps) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const slots = {
    button: { onPress: open },
    overlay: { isOpen, onClose: close },
  };

  const children =
    typeof triggerChildren === 'function'
      ? triggerChildren({
          isOpen,
          close,
          open,
        })
      : triggerChildren;

  return <SlotProvider slots={slots}>{children}</SlotProvider>;
};

export { OverlayProvider };
