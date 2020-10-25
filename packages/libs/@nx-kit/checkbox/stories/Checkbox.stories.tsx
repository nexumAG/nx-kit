import React from 'react';
import { Checkbox } from '../src';

export default {
  title: '@nx-kit/checkbox',
  component: Checkbox,
};

export const Default = () => <Checkbox onChange={console.log} ariaLabel="test" />;

export const Disabled = () => <Checkbox isDisabled ariaLabel="test" />;
