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
  ThemedStyledProps,
  DirectOrStylesProp,
  Theme,
  merge,
  getLiteralOrBreakpointValue,
} from '@nx-kit/styling';
import { VStackSpecialProps, Alignment, VStackProps, VStackStyledProps } from './types';
import { alignmentMap } from './utils';

const getVStack = (props: ThemedStyledProps<DirectOrStylesProp<VStackSpecialProps>, Theme>) => {
  const themeLookup = props.theme?.global?.spacing;

  return merge(
    getLiteralOrBreakpointValue('alignment', props, null, (_: string, value: Alignment) => {
      return { alignItems: alignmentMap[value] };
    }),
    getLiteralOrBreakpointValue('spacing', props, null, (_: string, propValue: string | number) => {
      const value = themeLookup?.[propValue] ?? propValue;
      return { rowGap: value };
    })
  );
};

const VStackStyled = styled.div<VStackStyledProps>`
  ${compose(
    getVStack,
    getSpacing,
    getFlexContainer,
    getFlexItem,
    getPosition,
    getColor,
    getLayout,
    getTypo
  )};
  ${getFont};
`;

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
        justifyContent: 'center',
        alignment: alignment ?? 'center',
        spacing,
      },
      ...styles,
    }}
  >
    {children}
  </VStackStyled>
);
