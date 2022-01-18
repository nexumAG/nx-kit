import React from 'react';
import { Select } from '../src';

export default {
  title: '@nx-kit/select',
  component: Select,
};

export const Default = () => (
  <Select>
    <Select.Item key="item1">Item 1</Select.Item>
    <Select.Item key="item2">Item 2</Select.Item>
  </Select>
);
