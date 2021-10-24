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
import { HStackProps, HStackStyledProps } from './types';

const HStackStyled = styled.div<HStackStyledProps>`
  ${compose(getSpacing, getFlexContainer, getFlexItem, getPosition, getColor, getLayout, getTypo)};
  ${getFont};
`;

const map = {
  stretch: 'stretch',
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
  baseline: 'baseline',
};

export const HStack = ({
  id,
  className,
  children,
  elementType,
  alignment,
  spacing,
  styles,
}: HStackProps) => (
  <HStackStyled
    id={id}
    className={className}
    as={elementType}
    styles={{
      ...{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: map[alignment ?? 'stretch'],
        gapNative: spacing && `0 ${spacing}`,
      },
      ...styles,
    }}
  >
    {children}
  </HStackStyled>
);
