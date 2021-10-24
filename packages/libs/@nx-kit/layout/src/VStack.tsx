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
import { VStackProps, VStackStyledProps } from './types';

const VStackStyled = styled.div<VStackStyledProps>`
  ${compose(getSpacing, getFlexContainer, getFlexItem, getPosition, getColor, getLayout, getTypo)};
  ${getFont};
`;

const map = {
  stretch: 'stretch',
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

export const VStack = ({
  id,
  className,
  children,
  elementType,
  alignment,
  spacing,
  styles,
}: VStackProps) => (
  <VStackStyled
    id={id}
    className={className}
    as={elementType}
    styles={{
      ...{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: map[alignment ?? 'center'],
        gapNative: spacing && `${spacing} 0`,
      },
      ...styles,
    }}
  >
    {children}
  </VStackStyled>
);
