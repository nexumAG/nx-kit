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
} from '@react-kit/styling';
import { ViewProps, ViewStyledProps } from './View.types';

const ViewStyled = styled.div<ViewStyledProps>`
  ${getSpacing()}
  ${getFlexItem()}
  ${getPosition()}
  ${getColor()}
  ${getLayout()}
  ${getFont()}
  ${getTypo()}
`;

export const View = ({ className, children, as, ...rest }: ViewProps) => {
  return (
    <ViewStyled className={className} as={as} {...rest}>
      {children}
    </ViewStyled>
  );
};
