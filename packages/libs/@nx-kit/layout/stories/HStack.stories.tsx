import React from 'react';
import { HStack, VStack, Spacer } from '../src';

export default {
  title: '@nx-kit/layout',
  component: HStack,
};

export const HStackExample = () => (
  <HStack spacing="10px">
    <span>Test</span>
    <span>Test</span>
    <Spacer />
    <span>Test</span>
  </HStack>
);

export const HStackInVStackExample = () => (
  <div style={{ height: '200px' }}>
    <VStack spacing="10px" alignment="left">
      <HStackExample />
      <HStackExample />
      <Spacer />
      <HStackExample />
    </VStack>
  </div>
);
