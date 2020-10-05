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
import {
  OverlayProps,
  OverlayStyledProps,
  OverlayTriggerProps,
  UnderlayStyledProps,
} from './Overlay.types';

export const Underlay = styled.div<UnderlayStyledProps>`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  ${({ theme }) => theme?.global?.underlay};
`;

export const OverlayStyled = styled.div<OverlayStyledProps>`
  &:focus {
    outline: none;
  }
  position: relative;
  background-color: #fff;
  padding: 30px;

  ${({ theme, skin }) => skin && theme?.component?.overlay?.skin?.[skin]};
`;

export const Overlay = (overlayProps: OverlayProps) => {
  const props = useSlotProps<OverlayProps>('overlay', overlayProps);
  const {
    children,
    className,
    skin,
    verticalAlignment = 'center',
    horizontalAlignment = 'center',
  } = props;

  const ref = React.useRef(null);
  const { overlayProps: useOverlayProps } = useOverlay(props, ref);

  usePreventScroll();
  const { modalProps } = useModal();

  const { dialogProps, titleProps } = useDialog(props, ref);

  const { isFocusVisible, focusProps } = useFocusRing();

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
    <OverlayContainer>
      <Underlay {...alignment}>
        <FocusScope contain restoreFocus autoFocus>
          <OverlayStyled
            className={className}
            skin={skin}
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
