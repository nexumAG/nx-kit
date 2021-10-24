import React from 'react';
import { VStack, Spacer } from '../src';

export default {
  title: '@nx-kit/layout',
  component: VStack,
};

export const VStackExample = () => (
  <div style={{ height: '200px' }}>
    <VStack spacing="10px" alignment="left">
      <span>Test</span>
      <span>Test</span>
      <Spacer />
      <span>Test</span>
    </VStack>
  </div>
);
