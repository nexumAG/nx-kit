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
  ${compose(
    getSpacing(),
    getFlexItem(),
    getPosition(),
    getColor(),
    getLayout(),
    getFont(),
    getTypo()
  )};
`;

export const View = ({ className, children, elementType, ...rest }: ViewProps) => {
  return (
    <ViewStyled className={className} as={elementType} {...rest}>
      {children}
    </ViewStyled>
  );
};
