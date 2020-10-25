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
  <Heading skin="700" styles={{ marginBottom: { xs: '20', md: '40' } }}>
    Heading Test
  </Heading>
);

export const CustomStyled = () => (
  <Heading
    skin="700"
    // If you want to use this syntax without typescript errors you have to handle it in the final project
    // see: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245
    // @ts-ignore
    css={`
      text-shadow: 3px 3px 4px #777;
    `}
  >
    Heading Test
  </Heading>
);

export const NoSkin = () => <Heading>Heading Test</Heading>;
