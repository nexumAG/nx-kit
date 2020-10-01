import React from 'react';
import { View } from '../src';

export default {
  title: '@react-kit/view',
  component: View,
};

export const Default = () => (
  <View elementType="main" width="200px" height="200px" backgroundColor="primary" opacity={0.5} />
);
