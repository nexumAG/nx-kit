import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Heading } from '@nx-kit/heading';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Button } from '@nx-kit/button';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from '@nx-kit/link';
import { Overlay, OverlayTrigger, Popover, PopoverTrigger } from '../src';

export default {
  title: '@nx-kit/overlay',
  component: Overlay,
  subcomponents: { OverlayTrigger, Popover, PopoverTrigger },
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
      <Overlay skin="default" isOpen={isOpen} onClose={close} isDismissable>
        <Heading skin="400" elementType="h3">
          Test Overlay
        </Heading>
        <Button onPress={close} skin="secondary">
          Close Overlay
        </Button>
      </Overlay>
    </>
  );
};

export const OverlayTriggerMinimal = () => (
  <OverlayTrigger>
    <Button skin="primary">Open Overlay</Button>

    <Overlay skin="default" isDismissable>
      <Heading skin="400" elementType="h3">
        Test Overlay
      </Heading>
    </Overlay>
  </OverlayTrigger>
);

export const OverlayTriggerNotDismissable = () => (
  <OverlayTrigger>
    {({ close }) => (
      <>
        <Button skin="primary">Open Overlay</Button>

        <Overlay skin="default">
          <Heading skin="400" elementType="h3">
            Test Overlay
          </Heading>
          <Button onPress={close} skin="secondary">
            Close Overlay
          </Button>
        </Overlay>
      </>
    )}
  </OverlayTrigger>
);

export const OverlayTriggerAllRenderProps = () => (
  <OverlayTrigger>
    {({ close, open, isOpen }) => (
      <>
        <Button
          skin="primary"
          onPress={() => {
            // call open manually
            open();
          }}
        >
          {isOpen ? 'Is open' : 'Open Overlay'}
        </Button>
        <Overlay
          skin="default"
          isDismissable
          onOpened={() => {
            // do something on opened
          }}
          onClosed={() => {
            // do something on closed
          }}
        >
          <Heading skin="400" elementType="h3">
            Test Overlay
          </Heading>
          <Button onPress={close} skin="secondary">
            Close Overlay
          </Button>
        </Overlay>
      </>
    )}
  </OverlayTrigger>
);

export const OverlayTriggerLink = () => (
  <OverlayTrigger>
    {({ close }) => (
      <>
        <Link skin="primary" slot="button">
          Open Overlay
        </Link>

        <Overlay skin="default" isDismissable>
          <Heading skin="400" elementType="h3">
            Test Overlay
          </Heading>
          <Button onPress={close} skin="secondary">
            Close Overlay
          </Button>
        </Overlay>
      </>
    )}
  </OverlayTrigger>
);

export const OverlayTriggerTopRight = () => (
  <OverlayTrigger>
    {({ close }) => (
      <>
        <Button skin="primary">Open Overlay</Button>

        <Overlay skin="default" verticalAlignment="top" horizontalAlignment="right" isDismissable>
          <Heading skin="400" elementType="h3">
            Test Overlay
          </Heading>
          <Button onPress={close} skin="secondary">
            Close Overlay
          </Button>
        </Overlay>
      </>
    )}
  </OverlayTrigger>
);

export const OverlayTriggerFullscreen = () => (
  <OverlayTrigger>
    {({ close }) => (
      <>
        <Button skin="primary">Open Overlay</Button>

        <Overlay
          skin="fullscreen"
          isDismissable
          animationDisabled
          styles={{ backgroundColor: '#f0f0f0' }}
        >
          <Heading skin="400" elementType="h3">
            Test Overlay
          </Heading>
          <Button onPress={close} skin="secondary">
            Close Overlay
          </Button>
        </Overlay>
      </>
    )}
  </OverlayTrigger>
);

export const PopoverDefault = () => (
  <PopoverTrigger>
    <Button skin="primary">Open Popover</Button>

    <Popover skin="popover" animationDisabled>
      <Heading skin="400" elementType="h3">
        Test Popover
      </Heading>
    </Popover>
  </PopoverTrigger>
);

export const PopoverPlacement = () => (
  <PopoverTrigger placement="bottom left" offset={10}>
    <Button skin="primary">Open Popover</Button>

    <Popover skin="popover">
      <Heading skin="400" elementType="h3">
        Test Popover
      </Heading>
    </Popover>
  </PopoverTrigger>
);

export const PopoverRenderProp = () => (
  <PopoverTrigger>
    {({ close, isOpen, toggle }) => (
      <>
        <Button
          skin="primary"
          onPress={() => {
            // call toggle manually
            toggle();
          }}
        >
          {isOpen ? 'Close' : 'Open'} Popover
        </Button>

        <Popover
          skin="popover"
          onOpened={() => {
            // do something on opened
          }}
          onClosed={() => {
            // do something on closed
          }}
        >
          <Heading skin="400" elementType="h3">
            Test Popover
          </Heading>
          <Button skin="secondary" onPress={close}>
            Close
          </Button>
        </Popover>
      </>
    )}
  </PopoverTrigger>
);

export const PopoverUpdateOnScroll = () => (
  <PopoverTrigger behaviour="updateOnScroll" placement="bottom">
    <p style={{ marginBottom: '10px' }}>
      This Popover will not close on scroll but instead will update it&apos;s position on scroll.
    </p>
    <Button skin="primary">Open Popover</Button>

    <Popover skin="popover">
      <Heading skin="400" elementType="h3">
        Test Popover
      </Heading>
    </Popover>
  </PopoverTrigger>
);

export const PopoverStayOnScroll = () => (
  <PopoverTrigger behaviour="stayOnScroll" placement="bottom">
    <p style={{ marginBottom: '10px' }}>
      This Popover will not close on scroll but will not update it&apos;s position.
    </p>
    <Button skin="primary">Open Popover</Button>

    <Popover skin="popover">
      <Heading skin="400" elementType="h3">
        Test Popover
      </Heading>
    </Popover>
  </PopoverTrigger>
);

export const PopoverNoPortal = () => (
  <PopoverTrigger behaviour="stayOnScrollNoPortal" placement="bottom">
    <p style={{ marginBottom: '10px' }}>
      This Popover will not close on scroll, will not update it&apos;s position and will not get
      rendered inside a portal.
    </p>
    <Button skin="primary">Open Popover</Button>

    <Popover skin="popover">
      <Heading skin="400" elementType="h3">
        Test Popover
      </Heading>
    </Popover>
  </PopoverTrigger>
);
