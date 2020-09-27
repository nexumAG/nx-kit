import React from 'react';
import { styled } from '@react-kit/styling';
import { Heading } from '../src';

export default {
  title: '@react-kit/heading',
  component: Heading,
};

const HeadingStyled = styled(Heading)`
  font-size: 100px;
`;

export const Default = () => <Heading>Heading Test</Heading>;
export const H2 = () => (
  <Heading
    tag="h2"
    css={`
      font-size: 100px;
    `}
  >
    Heading Test
  </Heading>
);
export const H3 = () => <HeadingStyled tag="h3">Heading Test</HeadingStyled>;
