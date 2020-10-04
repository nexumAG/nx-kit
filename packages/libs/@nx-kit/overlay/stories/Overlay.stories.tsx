import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Heading } from '@nx-kit/heading';
import { Modal } from '../src';

export default {
  title: '@nx-kit/overlay',
  component: Modal,
};

export const Default = () => (
  <Modal>
    <Heading skin="400" elementType="h3">
      Test Modal
    </Heading>
  </Modal>
);
