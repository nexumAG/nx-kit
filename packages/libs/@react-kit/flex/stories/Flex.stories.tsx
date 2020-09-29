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

export const Responsive = () => (
  <Flex justifyContent="space-between" flexWrap={{ xs: 'wrap', sm: 'nowrap' }}>
    <div>Col1 More and even more content</div>
    <div>Col2 More and even more content</div>
    <div>Col3 More and even more content</div>
  </Flex>
);
