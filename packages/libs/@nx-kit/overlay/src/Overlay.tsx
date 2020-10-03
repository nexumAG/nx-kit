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
import { OverlayProps } from './Overlay.types';

export const Overlay = (props: OverlayProps) => {
  const { title, children } = props;

  // Handle interacting outside the dialog and pressing
  // the Escape key to close the modal.
  const ref = React.useRef(null);
  const { overlayProps } = useOverlay(props, ref);

  // Prevent scrolling while the modal is open, and hide content
  // outside the modal from screen readers.
  usePreventScroll();
  const { modalProps } = useModal();

  // Get props for the dialog and its title
  const { dialogProps, titleProps } = useDialog(props, ref);

  return (
    <div
      style={{
        position: 'fixed',
        zIndex: 100,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FocusScope contain restoreFocus autoFocus>
        <div
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          ref={ref}
          style={{
            background: 'white',
            color: 'black',
            padding: 30,
          }}
        >
          <h3 {...titleProps} style={{ marginTop: 0 }}>
            {title}
          </h3>
          {children}
        </div>
      </FocusScope>
    </div>
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
