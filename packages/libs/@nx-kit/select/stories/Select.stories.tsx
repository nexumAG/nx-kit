import React from 'react';
import { Select } from '../src';

export default {
  title: '@nx-kit/select',
  component: Select,
};

export const Default = () => (
  <Select skin="default" placeholder="Select an option" styles={{ marginBottom: 50 }}>
    <Select.Item key="item1" textValue="item1">
      Item 1
    </Select.Item>
    <Select.Item key="item2" textValue="item2">
      Item 2
    </Select.Item>
  </Select>
);
