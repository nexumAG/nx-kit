import React, { useContext } from 'react';
import {
  styled,
  getLiteralOrBreakpointValue,
  getFlexItem,
  getPosition,
  getSpacing,
  getColor,
  getLayout,
  useTheme,
} from '@react-kit/styling';
import { ItemProps, ItemStyledProps } from './Item.types';
import { FlexContext, FlexContextGap } from './Flex';

const FlexStyled = styled.div<ItemStyledProps>`
  ${({ itemWidth }) => itemWidth};
  ${({ itemOffsetLeft }) => itemOffsetLeft};
  ${getFlexItem()}
  ${getPosition()}
  ${getSpacing()}
  ${getColor()}
  ${getLayout()}
`;

const getGapValue = (
  key: 'columnGap' | 'rowGap',
  breakpoint: string | number,
  gap?: FlexContextGap
) => {
  if (!gap) {
    return null;
  }
  // no gap breakpoints
  if (gap.columnGap && gap.rowGap) {
    return gap[key];
  }
  // same breakpoint exists in gap
  const gapBreakpoint = (gap as any)[breakpoint];
  if (gapBreakpoint) {
    return gapBreakpoint[key];
  }
  // same breakpoint doesn't exists
  // now it can get difficult, because we need the gap from the same breakpoint
  // best would be to use something like the If Provider
  // for now you have to make sure that you don't use breakpoints for the gap
  // or that a breakpoint exists for every breakpoint that you use for the sizes

  // TODO: best thing we can do for now: take the last breakpoint
  const firstBreakpoint = Object.keys(gap)[0];
  return (gap as any)[firstBreakpoint][key] ?? null;
};

export const Item = ({
  className,
  children,
  as,
  styles,
  width,
  height,
  offsetLeft,
  offsetTop,
  ...rest
}: ItemProps) => {
  const { gap } = useContext(FlexContext);
  const theme = useTheme();

  const itemWidth = getLiteralOrBreakpointValue(
    'width',
    { theme, width },
    null,
    (_: string, value: any, breakpoint?: string | number) => {
      if (!value) {
        return {};
      }
      // TODO: remove xs hardcoding, see getGapValue function
      const gapValue = getGapValue('columnGap', breakpoint ?? 'xs', gap);
      if (!gapValue) {
        return { width: `${value * 100}%` };
      }
      return { width: `calc(${value * 100}% - ${gapValue})` };
    }
  );

  const itemOffsetLeft = getLiteralOrBreakpointValue(
    'offsetLeft',
    { theme, offsetLeft },
    null,
    (_: string, value: any, breakpoint?: string | number) => {
      if (!value) {
        return {};
      }
      // TODO: remove xs hardcoding, see getGapValue function
      const gapValue = getGapValue('columnGap', breakpoint ?? 'xs', gap);
      if (!gapValue) {
        return { marginLeft: `${value * 100}%` };
      }
      const regex = /^([+-]?\d+(?:\.\d+)?)(\S+)$/g;
      const [, numberString, unit] = gapValue.split(regex);
      return { marginLeft: `calc(${value * 100}% + ${parseFloat(numberString) / 2}${unit})` };
    }
  );

  return (
    <FlexStyled
      className={className}
      as={as}
      itemWidth={itemWidth}
      itemOffsetLeft={itemOffsetLeft}
      styles={styles}
      {...rest}
    >
      {children}
    </FlexStyled>
  );
};
