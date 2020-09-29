import React from 'react';
import {
  styled,
  getFlexContainer,
  getPosition,
  getSpacing,
  getColor,
  getLayout,
} from '@react-kit/styling';
import { FlexProps, FlexStyledProps } from './Flex.types';

const FlexStyled = styled.div<FlexStyledProps>`
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  ${getFlexContainer()}
  ${getPosition()}
  ${getSpacing()}
  ${getColor()}
  ${getLayout()}
`;

export const Flex = ({ className, children, tag, styles, inline, ...rest }: FlexProps) => {
  return (
    <FlexStyled className={className} as={tag} styles={styles} inline={inline} {...rest}>
      {children}
    </FlexStyled>
  );
};
