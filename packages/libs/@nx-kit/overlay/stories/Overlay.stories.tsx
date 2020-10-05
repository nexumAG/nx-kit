import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Heading } from '@nx-kit/heading';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Button } from '@nx-kit/button';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from '@nx-kit/link';
import { Overlay, OverlayTrigger } from '../src';

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
      <Button onPress={open} skin="primary">
        Open Overlay
      </Button>
      {isOpen && (
        <Overlay skin="default" isOpen onClose={close} isDismissable>
          <Heading skin="400" elementType="h3">
            Test Overlay
          </Heading>
          <Button onPress={close} skin="secondary">
            Close Overlay
          </Button>
        </Overlay>
      )}
    </>
  );
};

export const OverlayTriggerNotDismissable = () => {
  return (
    <OverlayTrigger>
      {({ isOpen, close }) => (
        <>
          <Button skin="primary">Open Overlay</Button>
          {isOpen && (
            <Overlay skin="default">
              <Heading skin="400" elementType="h3">
                Test Overlay
              </Heading>
              <Button onPress={close} skin="secondary">
                Close Overlay
              </Button>
            </Overlay>
          )}
        </>
      )}
    </OverlayTrigger>
  );
};

export const OverlayTriggerLink = () => {
  return (
    <OverlayTrigger>
      {({ isOpen, close }) => (
        <>
          <Link skin="primary" slot="button">
            Open Overlay
          </Link>
          {isOpen && (
            <Overlay skin="default" isDismissable>
              <Heading skin="400" elementType="h3">
                Test Overlay
              </Heading>
              <Button onPress={close} skin="secondary">
                Close Overlay
              </Button>
            </Overlay>
          )}
        </>
      )}
    </OverlayTrigger>
  );
};

export const OverlayTriggerTopRight = () => {
  return (
    <OverlayTrigger>
      {({ isOpen, close }) => (
        <>
          <Button skin="primary">Open Overlay</Button>
          {isOpen && (
            <Overlay
              skin="default"
              verticalAlignment="top"
              horizontalAlignment="right"
              isDismissable
            >
              <Heading skin="400" elementType="h3">
                Test Overlay
              </Heading>
              <Button onPress={close} skin="secondary">
                Close Overlay
              </Button>
            </Overlay>
          )}
        </>
      )}
    </OverlayTrigger>
  );
};

export const OverlayTriggerFullscreen = () => {
  return (
    <OverlayTrigger>
      {({ isOpen, close }) => (
        <>
          <Button skin="primary">Open Overlay</Button>
          {isOpen && (
            <Overlay skin="fullscreen" isDismissable>
              <Heading skin="400" elementType="h3">
                Test Overlay
              </Heading>
              <Button onPress={close} skin="secondary">
                Close Overlay
              </Button>
            </Overlay>
          )}
        </>
      )}
    </OverlayTrigger>
  );
};
