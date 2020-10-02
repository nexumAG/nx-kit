import React from 'react';
import { View } from '../src';

export default {
  title: '@nx-kit/view',
  component: View,
};

export const Default = () => (
  <View elementType="main" height="200px" backgroundColor="primary500" opacity={0.5} />
);
