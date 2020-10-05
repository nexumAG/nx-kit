import React from 'react';
import { View } from '../src';

export default {
  title: '@nx-kit/view',
  component: View,
};

export const Default = () => (
  <View
    elementType="main"
    height="200px"
    backgroundColor={{
      xs: 'primary500',
      sm: 'primary600',
      md: 'primary700',
      xl: 'primary800',
      xxl: 'secondary700',
      xxxl: 'secondary800',
    }}
    opacity={0.5}
  />
);
