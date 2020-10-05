import React, { useState } from 'react';
import {
  useOverlay,
  usePreventScroll,
  useModal,
  OverlayProvider,
  OverlayContainer,
} from '@react-aria/overlays';
import { useDialog } from '@react-aria/dialog';
import { FocusScope, useFocusRing } from '@react-aria/focus';
import { styled } from '@nx-kit/styling';
import { SlotProvider, useSlotProps } from '@nx-kit/slot';
import { OverlayProps, OverlayStyledProps, OverlayTriggerProps } from './Overlay.types';

export const Underlay = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OverlayStyled = styled.div<OverlayStyledProps>`
  &:focus {
    outline: none;
  }
  position: relative;
  background: white;
  color: black;
  padding: 30px;

  ${({ isFocused, theme }) => isFocused && theme.global.focusRing};
`;

export const Overlay = (overlayProps: OverlayProps) => {
  const props = useSlotProps<OverlayProps>('overlay', overlayProps);
  const { children } = props;

  const ref = React.useRef(null);
  const { overlayProps: useOverlayProps } = useOverlay(props, ref);

  usePreventScroll();
  const { modalProps } = useModal();

  const { dialogProps, titleProps } = useDialog(props, ref);

  const { isFocusVisible, focusProps } = useFocusRing();

  const slots = {
    heading: titleProps,
  };

  return (
    <OverlayContainer>
      <Underlay>
        <FocusScope contain restoreFocus autoFocus>
          <OverlayStyled
            {...useOverlayProps}
            {...dialogProps}
            {...modalProps}
            {...focusProps}
            isFocused={isFocusVisible}
            ref={ref}
          >
            <SlotProvider slots={slots}>{children}</SlotProvider>
          </OverlayStyled>
        </FocusScope>
      </Underlay>
    </OverlayContainer>
  );
};

export const OverlayTrigger = ({ children }: OverlayTriggerProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
