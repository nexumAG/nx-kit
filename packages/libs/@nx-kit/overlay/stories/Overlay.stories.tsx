import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Heading } from '@nx-kit/heading';
import { Overlay } from '../src';

export default {
  title: '@nx-kit/overlay',
  component: Overlay,
};

export const Default = () => {
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
        Open Overlay
      </button>
      {isOpen && (
        <Overlay isOpen onClose={close} isDismissable>
          <Heading skin="400" elementType="h3">
            Test Overlay
          </Heading>
          <button onClick={close} type="button">
            Close Overlay
          </button>
        </Overlay>
      )}
    </>
  );
};
