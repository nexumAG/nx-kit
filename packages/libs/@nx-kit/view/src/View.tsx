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
import { ViewProps, ViewStyledProps } from './View.types';

const ViewStyled = styled.div<ViewStyledProps>`
  ${compose(getSpacing, getFlexContainer, getFlexItem, getPosition, getColor, getLayout, getTypo)};
  ${getFont};
`;

export const View = ({ id, className, children, elementType, ...rest }: ViewProps) => (
  <ViewStyled id={id} className={className} as={elementType} styles={rest}>
    {children}
  </ViewStyled>
);
