import React from 'react';
import {
  styled,
  getSpacing,
  getFlexItem,
  getPosition,
  getColor,
  getLayout,
} from '@react-kit/styling';
import { HeadingProps, HeadingStyledProps } from './Heading.types';

const HeadingStyled = styled.h2<HeadingStyledProps>`
  ${({ theme, skin }) => skin && theme.component.heading.skin[skin]};
  ${getSpacing()}
  ${getFlexItem()}
  ${getPosition()}
  ${getColor()}
  ${getLayout()}
`;

export const Heading = ({ className, children, tag, skin, styles }: HeadingProps) => {
  return (
    <HeadingStyled className={className} skin={skin} as={tag} styles={styles}>
      {children}
    </HeadingStyled>
  );
};
