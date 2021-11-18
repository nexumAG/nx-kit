import React, { useState } from 'react';
import { Accordion } from '../src';

export default {
  title: '@nx-kit/accordion',
  component: Accordion,
  subcomponents: { 'Accordion.Item': Accordion.Item },
};

export const Default = () => (
  <Accordion skin="default" onChange={console.log}>
    <Accordion.Item title="Item 1">
      <p>Item 1 content</p>
      <p>
        <input type="text" />
      </p>
    </Accordion.Item>
    <Accordion.Item title="Item 2">
      <p>Item 2 content</p>
    </Accordion.Item>
  </Accordion>
);

export const HeadingLevel4 = () => (
  <Accordion skin="default" onChange={console.log} headingLevel={4}>
    <Accordion.Item title="Item 1">
      <p>Item 1 content</p>
      <p>
        <input type="text" />
      </p>
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
    <Accordion.Item title="Item 3">
      <p>Item 3 content</p>
    </Accordion.Item>
    <Accordion.Item title="Item 4">
      <p>Item 4 content</p>
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

export const ScrollIntoView = () => (
  <Accordion skin="default" allowZeroExpanded allowMultipleExpanded onChange={console.log}>
    <Accordion.Item
      title="Item 1"
      onPress={({ buttonElement, isOpen }) =>
        isOpen && buttonElement?.scrollIntoView({ block: 'start', behavior: 'smooth' })
      }
    >
      <p>Item 1 content</p>
      <p>Item 1 content</p>
      <p>Item 1 content</p>
      <p>Item 1 content</p>
    </Accordion.Item>
    <Accordion.Item
      title="Item 2"
      onPress={({ buttonElement, isOpen }) =>
        isOpen && buttonElement?.scrollIntoView({ block: 'start', behavior: 'smooth' })
      }
    >
      <p>Item 2 content</p>
      <p>Item 2 content</p>
      <p>Item 2 content</p>
      <p>Item 2 content</p>
    </Accordion.Item>
    <Accordion.Item
      title="Item 3"
      onPress={({ buttonElement, isOpen }) =>
        isOpen && buttonElement?.scrollIntoView({ block: 'start', behavior: 'smooth' })
      }
    >
      <p>Item 3 content</p>
      <p>Item 3 content</p>
      <p>Item 3 content</p>
      <p>Item 3 content</p>
    </Accordion.Item>
    <Accordion.Item
      title="Item 4"
      onPress={({ buttonElement, isOpen }) =>
        isOpen && buttonElement?.scrollIntoView({ block: 'start', behavior: 'smooth' })
      }
    >
      <p>Item 4 content</p>
      <p>Item 4 content</p>
      <p>Item 4 content</p>
      <p>Item 4 content</p>
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

export const Nested = () => (
  <Accordion skin="default" allowMultipleExpanded onChange={console.log}>
    <Accordion.Item title="Item 1" isOpen>
      <p>Item 1 content</p>
    </Accordion.Item>
    <Accordion.Item title="Item 2">
      <div>
        <Accordion allowMultipleExpanded allowZeroExpanded onChange={console.log}>
          <Accordion.Item id="item2.1" title="Item 2.1">
            <p>Item 2.1 content</p>
          </Accordion.Item>
          <Accordion.Item id="item2.2" title="Item 2.2">
            <p>Item 2.2 content</p>
          </Accordion.Item>
        </Accordion>
      </div>
    </Accordion.Item>
  </Accordion>
);

export const ItemFunction = () => (
  <Accordion skin="default" allowZeroExpanded allowMultipleExpanded onChange={console.log}>
    <Accordion.Item
      title={(isOpen: boolean) => (
        <span style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Item 1</span>
          <span aria-hidden>{isOpen ? 'open' : 'closed'}</span>
        </span>
      )}
    >
      <p>Item 1 content</p>
    </Accordion.Item>
    <Accordion.Item
      title={(isOpen: boolean) => (
        <span style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Item 2</span>
          <span aria-hidden>{isOpen ? 'open' : 'closed'}</span>
        </span>
      )}
    >
      <p>Item 2 content</p>
    </Accordion.Item>
  </Accordion>
);
