import React, { useEffect, useState } from 'react';
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
import { useEffectExceptOnMount } from '@nx-kit/utils';
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

const OverlayInner = (props: OverlayInnerProps) => {
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

  const ref = React.useRef(null);
  const { overlayProps: useOverlayProps } = useOverlay(props, ref);
  const { modalProps } = useModal();
  const { dialogProps, titleProps } = useDialog(props, ref);
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

  const overlay = (
    <FocusScope contain={focusContain} restoreFocus={focusRestore} autoFocus={focusAuto}>
      <OverlayStyled
        className={className}
        isFocused={isFocusVisible}
        ref={ref}
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
};

export const Overlay = (overlayProps: OverlayProps) => {
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
            <OverlayInner {...props} state={state as TransitionStates} />
          </OverlayContainer>
        ) : (
          <OverlayInner {...props} state={state as TransitionStates} />
        )
      }
    </Transition>
  );
};

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
