import React from 'react';
import { Heading } from '../src';
import { HeadingTag } from '../src/Heading.types';

export default {
  title: '@react-kit/heading',
  component: Heading,
};

export const Default = () => <Heading>Heading Test</Heading>;
export const H2 = () => <Heading tag={HeadingTag.h2}>Heading Test</Heading>;
