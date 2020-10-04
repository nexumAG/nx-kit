import React from 'react';
import {
  useOverlay,
  usePreventScroll,
  useModal,
  OverlayProvider,
  OverlayContainer,
} from '@react-aria/overlays';
import { useDialog } from '@react-aria/dialog';
import { FocusScope } from '@react-aria/focus';
import { styled } from '@nx-kit/styling';
import { SlotProvider } from '@nx-kit/slot';
import { OverlayProps } from './Overlay.types';

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

export const OverlayStyled = styled.div`
  background: white;
  color: black;
  padding: 30px;
`;

export const Overlay = (props: OverlayProps) => {
  const { children } = props;

  const ref = React.useRef(null);
  const { overlayProps } = useOverlay(props, ref);

  usePreventScroll();
  const { modalProps } = useModal();

  const { dialogProps, titleProps } = useDialog(props, ref);

  const slots = {
    heading: titleProps,
  };

  return (
    <OverlayContainer>
      <Underlay>
        <FocusScope contain restoreFocus autoFocus>
          <OverlayStyled {...overlayProps} {...dialogProps} {...modalProps} ref={ref}>
            <SlotProvider slots={slots}>{children}</SlotProvider>
          </OverlayStyled>
        </FocusScope>
      </Underlay>
    </OverlayContainer>
  );
};

export { OverlayProvider };
