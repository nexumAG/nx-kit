import React from 'react';
import { styled } from '@react-kit/styling';
import { HeadingProps } from './Heading.types';

const HeadingStyled = styled.h2<{ skin?: string }>`
  ${({ theme, skin }) => skin && theme.component.heading.skin[skin]};
`;

export const Heading = ({ className, children, tag, skin }: HeadingProps) => {
  return (
    <HeadingStyled className={className} skin={skin} as={tag}>
      {children}
    </HeadingStyled>
  );
};
