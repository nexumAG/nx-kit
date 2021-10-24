import React from 'react';
import {
  styled,
  getSpacing,
  getFlexContainer,
  getFlexItem,
  getPosition,
  getColor,
  getLayout,
  getFont,
  getTypo,
  compose,
} from '@nx-kit/styling';
import { SpacerProps, SpacerStyledProps } from './types';

const SpacerStyled = styled.div<SpacerStyledProps>`
  ${compose(getSpacing, getFlexContainer, getFlexItem, getPosition, getColor, getLayout, getTypo)};
  ${getFont};
`;

export const Spacer = ({ id, className, children, elementType, styles }: SpacerProps) => (
  <SpacerStyled
    id={id}
    className={className}
    as={elementType}
    styles={{
      ...{
        flexGrow: '1',
      },
      ...styles,
    }}
  >
    {children}
  </SpacerStyled>
);
