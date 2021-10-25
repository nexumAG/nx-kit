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
  getLiteralOrBreakpointValue,
  Theme,
  ThemedStyledProps,
  merge,
  DirectOrStylesProp,
  media,
  css,
} from '@nx-kit/styling';
import { HStackProps, HStackSpecialProps, HStackStyledProps, Alignment } from './types';
import { alignmentMap } from './utils';

const getHStack = (props: ThemedStyledProps<DirectOrStylesProp<HStackSpecialProps>, Theme>) => {
  const themeLookup = props.theme?.global?.spacing;

  return merge(
    getLiteralOrBreakpointValue('alignment', props, null, (_: string, value: Alignment) => {
      return { alignItems: alignmentMap[value] };
    }),
    getLiteralOrBreakpointValue('spacing', props, null, (_: string, propValue: string | number) => {
      const value = themeLookup?.[propValue] ?? propValue;
      return { gap: value };
    })
  );
};

const HStackStyled = styled.div<HStackStyledProps>`
  ${({ horizontalBreakpoint }) =>
    horizontalBreakpoint
      ? css<any>`
          flex-direction: column;
          ${media(horizontalBreakpoint as any)} {
            flex-direction: row;
          }
        `
      : `flex-direction: row;`}
  ${compose(
    getHStack,
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

export const HStack = ({
  id,
  className,
  children,
  elementType,
  alignment,
  spacing,
  horizontalBreakpoint,
  styles,
}: HStackProps) => (
  <HStackStyled
    id={id}
    className={className}
    as={elementType}
    horizontalBreakpoint={horizontalBreakpoint}
    styles={{
      ...{
        display: 'flex',
        justifyContent: 'center',
        alignment: alignment ?? 'center',
        spacing,
      },
      ...styles,
    }}
  >
    {children}
  </HStackStyled>
);
