import React from 'react';
import {
  styled,
  getSpacing,
  getFlexItem,
  getPosition,
  getColor,
  getLayout,
  getFont,
  getTypo,
} from '@nx-kit/styling';
import { HeadingProps, HeadingStyledProps } from './Heading.types';

const HeadingStyled = styled.h2<HeadingStyledProps>`
  ${({ theme, skin }) => skin && theme.component.heading.skin[skin]};
  ${getSpacing()}
  ${getFlexItem()}
  ${getPosition()}
  ${getColor()}
  ${getLayout()}
  ${getFont()}
  ${getTypo()}
`;

export const Heading = ({ className, children, elementType, skin, styles }: HeadingProps) => {
  return (
    <HeadingStyled className={className} skin={skin} as={elementType} styles={styles}>
      {children}
    </HeadingStyled>
  );
};