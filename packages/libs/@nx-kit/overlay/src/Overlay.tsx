import React, { useState } from 'react';
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
import { Underlay } from './Underlay';
import { OverlayProps } from './Overlay.types';

export const OverlayStyled = styled.div`
  background: white;
  color: black;
  padding: 30px;
`;

export const Overlay = (props: OverlayProps) => {
  const { title, children } = props;

  const ref = React.useRef(null);
  const { overlayProps } = useOverlay(props, ref);

  usePreventScroll();
  const { modalProps } = useModal();

  const { dialogProps, titleProps } = useDialog(props, ref);

  return (
    <Underlay>
      <FocusScope contain restoreFocus autoFocus>
        <OverlayStyled {...overlayProps} {...dialogProps} {...modalProps} ref={ref}>
          <h3 {...titleProps} style={{ marginTop: 0 }}>
            {title}
          </h3>
          {children}
        </OverlayStyled>
      </FocusScope>
    </Underlay>
  );
};

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={open} type="button">
        Open Dialog
      </button>
      {isOpen && (
        <OverlayContainer>
          <Overlay title="Enter your name" isOpen onClose={close} isDismissable>
            <form style={{ display: 'flex', flexDirection: 'column' }}>
              <label>
                First Name: <input placeholder="John" />
              </label>
              <label>
                Last Name: <input placeholder="Smith" />
              </label>
              <button onClick={close} type="button" style={{ marginTop: 10 }}>
                Submit
              </button>
            </form>
          </Overlay>
        </OverlayContainer>
      )}
    </>
  );
};

export { OverlayProvider };
