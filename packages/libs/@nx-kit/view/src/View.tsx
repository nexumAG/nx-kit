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
  compose,
} from '@nx-kit/styling';
import { ViewProps, ViewStyledProps } from './View.types';

const ViewStyled = styled.div<ViewStyledProps>`
  ${compose(getSpacing, getFlexItem, getPosition, getColor, getLayout, getTypo)};
  ${getFont};
`;

export const View = ({ children, elementType, ...rest }: ViewProps) => {
  return (
    <ViewStyled as={elementType} {...rest}>
      {children}
    </ViewStyled>
  );
};
