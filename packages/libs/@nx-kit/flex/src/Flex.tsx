import React, { useContext } from 'react';
import {
  styled,
  getFlexContainer,
  getPosition,
  getSpacing,
  getColor,
  getLayout,
  getFlexItem,
  getFont,
  getTypo,
  LiteralOrBreakpoints,
  FlexContainer,
  parseGap,
  Theme,
  useTheme,
  getLiteralOrBreakpointValue,
} from '@nx-kit/styling';
import { FlexProps, FlexStyledProps } from './Flex.types';

type FlexContextGap = LiteralOrBreakpoints<{
  rowGap: string;
  columnGap: string;
}>;

const FlexContext = React.createContext<{
  gap?: FlexContextGap;
}>({});

const FlexStyled = styled.div<FlexStyledProps>`
  display: ${({ flexType }) => (flexType === 'none' ? undefined : flexType)};
  ${({ col }) => col};
  ${({ row }) => row};
  ${({ colOffset }) => colOffset};
  ${getFlexContainer()}
  ${getPosition()}
  ${getSpacing()}
  ${getColor()}
  ${getLayout()}
  ${getFlexItem()}
  ${getFont()}
  ${getTypo()}
`;

const getGapContextValue = (theme?: Theme, gap?: FlexContainer['gap']): FlexContextGap => {
  if (!gap) {
    return {
      rowGap: '0px',
      columnGap: '0px',
    };
  }
  if (typeof gap === 'string' || typeof gap === 'number') {
    return parseGap(gap, theme);
  }
  return Object.keys(gap).reduce(
    (acc, breakpoint: number | string) => ({
      ...acc,
      [breakpoint]: parseGap(gap[breakpoint], theme),
    }),
    {}
  );
};

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

const customFunctionSize = (key: 'columnGap' | 'rowGap', prop: string, gap?: FlexContextGap) => {
  return (_: string, value: any, breakpoint?: string | number) => {
    if (!value) {
      return {};
    }
    // TODO: remove xs hardcoding, see getGapValue function
    const gapValue = getGapValue(key, breakpoint ?? 'xs', gap);
    if (!gapValue) {
      return { [prop]: `${value * 100}%` };
    }
    return { [prop]: `calc(${value * 100}% - ${gapValue})` };
  };
};

const customFunctionOffset = (key: 'columnGap' | 'rowGap', prop: string, gap?: FlexContextGap) => {
  return (_: string, value: any, breakpoint?: string | number) => {
    if (!value) {
      return {};
    }
    // TODO: remove xs hardcoding, see getGapValue function
    const gapValue = getGapValue(key, breakpoint ?? 'xs', gap);
    if (!gapValue) {
      return { [prop]: `${value * 100}%` };
    }
    const regex = /^([+-]?\d+(?:\.\d+)?)(\S+)$/g;
    const [, numberString, unit] = gapValue.split(regex);
    return { [prop]: `calc(${value * 100}% + ${parseFloat(numberString) / 2}${unit})` };
  };
};

export const Flex = ({
  className,
  children,
  elementType,
  styles,
  flexType = 'flex',
  col,
  row,
  colOffset,
  ...rest
}: FlexProps) => {
  const { gap } = rest;
  const theme = useTheme();

  const { gap: gapContext } = useContext(FlexContext);

  const colWidth = getLiteralOrBreakpointValue(
    'col',
    { theme, col },
    null,
    customFunctionSize('columnGap', 'width', gapContext)
  );

  const rowHeight = getLiteralOrBreakpointValue(
    'row',
    { theme, row },
    null,
    customFunctionSize('rowGap', 'height', gapContext)
  );

  const colOffsetWidth = getLiteralOrBreakpointValue(
    'colOffset',
    { theme, colOffset },
    null,
    customFunctionOffset('columnGap', 'marginLeft', gapContext)
  );

  return (
    <FlexContext.Provider value={{ gap: getGapContextValue(theme, gap) }}>
      <FlexStyled
        className={className}
        as={elementType}
        styles={styles}
        flexType={flexType}
        col={colWidth}
        row={rowHeight}
        colOffset={colOffsetWidth}
        {...rest}
      >
        {children}
      </FlexStyled>
    </FlexContext.Provider>
  );
};
