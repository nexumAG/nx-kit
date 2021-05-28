import React, { useState } from 'react';
import { Accordion } from '../src';

export default {
  title: '@nx-kit/accordion',
  component: Accordion,
};

export const Default = () => (
  <Accordion skin="default" onChange={console.log}>
    <Accordion.Item title="Item 1">
      <p>Item 1 content</p>
    </Accordion.Item>
    <Accordion.Item title="Item 2">
      <p>Item 2 content</p>
    </Accordion.Item>
  </Accordion>
);

export const OtherElements = () => (
  <Accordion skin="default" onChange={console.log}>
    <Accordion.Item title="Item 1">
      <p>Item 1 content</p>
    </Accordion.Item>
    <div style={{ backgroundColor: '#f0f0f0' }}>Div in between</div>
    <Accordion.Item title="Item 2">
      <p>Item 2 content</p>
    </Accordion.Item>
  </Accordion>
);

export const AllowZeroExpanded = () => (
  <Accordion skin="default" allowZeroExpanded onChange={console.log}>
    <Accordion.Item title="Item 1">
      <p>Item 1 content</p>
    </Accordion.Item>
    <Accordion.Item title="Item 2">
      <p>Item 2 content</p>
    </Accordion.Item>
  </Accordion>
);

export const AllowZeroAndMultipleExpanded = () => (
  <Accordion skin="default" allowZeroExpanded allowMultipleExpanded onChange={console.log}>
    <Accordion.Item title="Item 1">
      <p>Item 1 content</p>
    </Accordion.Item>
    <Accordion.Item title="Item 2">
      <p>Item 2 content</p>
    </Accordion.Item>
  </Accordion>
);

export const IsOpen = () => (
  <Accordion skin="default" onChange={console.log}>
    <Accordion.Item title="Item 1" isOpen>
      <p>Item 1 content</p>
    </Accordion.Item>
    <Accordion.Item title="Item 2">
      <p>Item 2 content</p>
    </Accordion.Item>
  </Accordion>
);

export const NoSkin = () => (
  <Accordion onChange={console.log}>
    <Accordion.Item title="Item 1">
      <p>Item 1 content</p>
    </Accordion.Item>
    <Accordion.Item title="Item 2">
      <p>Item 2 content</p>
    </Accordion.Item>
  </Accordion>
);

export const ExpandedItems = () => (
  <Accordion
    skin="default"
    allowMultipleExpanded
    expandedItems={['item1', 'item3']}
    onChange={console.log}
  >
    <Accordion.Item id="item1" title="Item 1">
      <p>Item 1 content</p>
    </Accordion.Item>
    <Accordion.Item id="item2" title="Item 2">
      <p>Item 2 content</p>
    </Accordion.Item>
    <Accordion.Item id="item3" title="Item 3">
      <p>Item 3 content</p>
    </Accordion.Item>
  </Accordion>
);

export const NoControl = () => {
  const [expandedItems, setExpandedItems] = useState(['item1', 'item3']);

  return (
    <>
      <Accordion
        skin="default"
        allowMultipleExpanded
        allowZeroExpanded
        expandedItems={expandedItems}
        onChange={console.log}
      >
        <Accordion.Item id="item1" title="Item 1" noControl>
          <p>Item 1 content</p>
        </Accordion.Item>
        <Accordion.Item id="item2" title="Item 2" noControl>
          <p>Item 2 content</p>
        </Accordion.Item>
        <Accordion.Item id="item3" title="Item 3" noControl>
          <p>Item 3 content</p>
        </Accordion.Item>
      </Accordion>

      <button type="button" onClick={() => setExpandedItems([])}>
        Close all
      </button>
      <button type="button" onClick={() => setExpandedItems(['item1', 'item2', 'item3'])}>
        Open all
      </button>
    </>
  );
};
