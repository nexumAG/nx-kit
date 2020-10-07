import React, { useState } from 'react';
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
  ${compose(getSpacing(), getPosition(), getColor(), getLayout(), getFont(), getTypo())}
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
    state,
    ...rest
  } = props;

  const ref = React.useRef(null);
  const { overlayProps: useOverlayProps } = useOverlay(props, ref);
  const { modalProps } = useModal();
  const { dialogProps, titleProps } = useDialog(props, ref);
  const { isFocusVisible, focusProps } = useFocusRing();
  usePreventScroll();

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

  return (
    <>
      <Underlay state={state as TransitionStates} />
      <OverlayWrapper {...alignment}>
        <FocusScope contain restoreFocus autoFocus>
          <OverlayStyled
            className={className}
            {...useOverlayProps}
            {...dialogProps}
            {...modalProps}
            {...focusProps}
            isFocused={isFocusVisible}
            ref={ref}
            state={state as TransitionStates}
            {...rest}
          >
            <SlotProvider slots={slots}>{children}</SlotProvider>
          </OverlayStyled>
        </FocusScope>
      </OverlayWrapper>
    </>
  );
};

export const Overlay = (overlayProps: OverlayProps) => {
  const props = useSlotProps<OverlayProps>('overlay', overlayProps);
  const { isOpen, animationDisabled } = props;

  if (animationDisabled && !isOpen) {
    return null;
  }

  return (
    <Transition in={isOpen} timeout={{ enter: 0, exit: 350 }} unmountOnExit mountOnEnter>
      {(state) => (
        <OverlayContainer>
          <OverlayInner {...props} state={state as TransitionStates} />
        </OverlayContainer>
      )}
    </Transition>
  );
};

export const OverlayTrigger = ({
  children,
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

  return <SlotProvider slots={slots}>{children({ isOpen, close })}</SlotProvider>;
};

export { OverlayProvider };
