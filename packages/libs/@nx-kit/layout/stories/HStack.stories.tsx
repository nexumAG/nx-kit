import React from 'react';
import { HStack, VStack, ZStack, Spacer } from '../src';

export default {
  title: '@nx-kit/layout',
  component: HStack,
  subcomponents: { VStack, ZStack },
};

export const HStackExample = () => (
  <HStack
    alignment="start"
    spacing={{ xs: 0, sm: 20, md: 40 }}
    horizontalBreakpoint="sm"
    styles={{ width: '100%' }}
  >
    <span>Test</span>
    <span>Test</span>
    <Spacer />
    <span>Test</span>
  </HStack>
);

HStackExample.storyName = 'HStack';

export const HStackInVStackExample = () => (
  <div style={{ height: '300px' }}>
    <VStack spacing={20} styles={{ height: { xs: 'auto', sm: '100%' } }}>
      <HStackExample />
      <HStackExample />
      <Spacer />
      <HStackExample />
    </VStack>
  </div>
);

HStackInVStackExample.storyName = 'HStack in VStack';

export const ZStackExample = () => (
  <ZStack alignment="center" styles={{ height: '450px', backgroundColor: '#ccc' }}>
    <img src="https://loremflickr.com/360/360" alt="lorem" />
    <span style={{ color: 'red', fontSize: '30px' }}>Test</span>
  </ZStack>
);

ZStackExample.storyName = 'ZStack';
