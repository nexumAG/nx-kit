import React from 'react';
import { HStack, VStack, ZStack, Spacer } from '../src';

export default {
  title: '@nx-kit/layout',
  component: HStack,
  subcomponents: { VStack, ZStack },
  argTypes: {
    alignment: {
      options: [
        'center',
        'top',
        'topRight',
        'right',
        'bottomRight',
        'bottom',
        'bottomLeft',
        'left',
        'topLeft',
      ],
      control: { type: 'inline-radio' },
    },
  },
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

export const ZStackExample = (args: any) => (
  <ZStack {...args} styles={{ height: '500px', backgroundColor: '#ccc' }}>
    <img src="https://loremflickr.com/360/360" alt="lorem" />
    <span style={{ color: 'red', fontSize: '30px', width: '200px' }}>
      This is a little longer text that should be correctly aligned
    </span>
    <svg width="100" height="100">
      <circle cx="50" cy="50" r="40" stroke="green" strokeWidth="4" fill="yellow" />
    </svg>
  </ZStack>
);

ZStackExample.args = {
  alignment: 'center',
};

ZStackExample.storyName = 'ZStack';
