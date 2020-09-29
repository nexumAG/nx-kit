import React from 'react';
import { styled, getFlexContainer } from '@react-kit/styling';
import { FlexProps, FlexStyledProps } from './Flex.types';

const FlexStyled = styled.div<FlexStyledProps>`
  display: flex;
  ${getFlexContainer()}
`;

export const Flex = ({ className, children, tag, ...rest }: FlexProps) => {
  return (
    <FlexStyled className={className} as={tag} {...rest}>
      {children}
    </FlexStyled>
  );
};
