import React from 'react';
import { Accordion } from '../src';

export default {
  title: '@nx-kit/accordion',
  component: Accordion,
};

export const Default = () => (
  <Accordion skin="default">
    <Accordion.Item title="Item 1">
      <p>Item 1 content</p>
    </Accordion.Item>
    <Accordion.Item title="Item 2">
      <p>Item 2 content</p>
    </Accordion.Item>
  </Accordion>
);

export const IsOpen = () => (
  <Accordion skin="default">
    <Accordion.Item title="Item 1">
      <p>Item 1 content</p>
    </Accordion.Item>
    <Accordion.Item title="Item 2" isOpen>
      <p>Item 2 content</p>
    </Accordion.Item>
  </Accordion>
);
