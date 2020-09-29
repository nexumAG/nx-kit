import React from 'react';
import { Flex } from '../src';

export default {
  title: '@react-kit/flex',
  component: Flex,
};

export const Default = () => (
  <Flex justifyContent="space-between">
    <div>Col1</div>
    <div>Col2</div>
    <div>Col3</div>
  </Flex>
);
