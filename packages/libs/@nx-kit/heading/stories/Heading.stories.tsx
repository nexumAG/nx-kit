import React from 'react';
import { Heading } from '../src';

export default {
  title: '@nx-kit/heading',
  component: Heading,
};

export const Skin700 = () => (
  <Heading skin="700" elementType="h1" styles={{ color: 'primary500' }}>
    Heading Test
  </Heading>
);

export const Skin600 = () => <Heading skin="600">Heading Test</Heading>;

export const Skin500 = () => <Heading skin="500">Heading Test</Heading>;

export const Skin400 = () => <Heading skin="400">Heading Test</Heading>;

export const Skin700FontOverride = () => (
  <Heading skin="700" styles={{ font: 'georgiaNormal' }}>
    Heading Test
  </Heading>
);

export const NoSkin = () => <Heading>Heading Test</Heading>;
