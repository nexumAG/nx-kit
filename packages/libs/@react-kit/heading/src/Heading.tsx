import React from 'react';
import { styled } from '@react-kit/styling';
import { HeadingProps } from './Heading.types';

const HeadingStyled = styled.h1<{ skin: any }>`
  color: red;
`;

export const Heading = ({ children, tag, skin }: HeadingProps) => {
  const Component = tag ? HeadingStyled.withComponent(tag) : HeadingStyled;
  return <Component skin={skin}>{children}</Component>;
};
