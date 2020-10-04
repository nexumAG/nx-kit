import React from 'react';
import { Divider } from '../src';

export default {
  title: '@nx-kit/divider',
  component: Divider,
};

export const Horizontal = () => <Divider skin="100" />;
export const Vertical = () => <Divider skin="100" orientation="vertical" />;
