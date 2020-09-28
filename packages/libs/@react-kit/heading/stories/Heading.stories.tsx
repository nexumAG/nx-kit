import React from 'react';
import { Heading } from '../src';

export default {
  title: '@react-kit/heading',
  component: Heading,
};

export const Default = () => <Heading skin="100">Heading Test</Heading>;
export const H2 = () => (
  <Heading
    tag="h2"
    skin="100"
    css={`
      &&& {
        font-size: 100px;
      }
    `}
  >
    Heading Test
  </Heading>
);
export const H3 = () => (
  <Heading tag="h3" skin="200">
    Heading Test
  </Heading>
);
