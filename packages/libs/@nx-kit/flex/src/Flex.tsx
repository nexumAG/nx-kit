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
  useTheme,
  getLiteralOrBreakpointValue,
  useBreakpointsSorted,
  compose,
} from '@nx-kit/styling';
import { FlexProps, FlexStyledProps, FlexContextGap } from './Flex.types';
import {
  customFunctionOffset,
  customFunctionSize,
  getAllBreakpoints,
  getGapContextAllBreakpoints,
  getGapContextValue,
  hasGapBreakpoints,
} from './utils';

const FlexContext = React.createContext<{
  gap?: FlexContextGap;
}>({});

const FlexStyled = styled.div<FlexStyledProps>`
  display: ${({ flexType }) => (flexType === 'none' ? undefined : flexType)};
  ${({ col }) => col};
  ${({ row }) => row};
  ${({ colOffset }) => colOffset};
  ${compose(getFlexContainer, getPosition, getSpacing, getColor, getLayout, getFlexItem, getTypo)}
  ${getFont};
`;

export const Flex = ({
  className,
  children,
  elementType,
  styles,
  flexType = 'flex',
  col: colTmp,
  row: rowTmp,
  colOffset: colOffsetTmp,
  ...rest
}: FlexProps) => {
  const { gap } = rest;
  const theme = useTheme();
  const breakpointsSorted = useBreakpointsSorted();

  const { gap: gapContextTmp } = useContext(FlexContext);
  const gapContext = getGapContextAllBreakpoints(breakpointsSorted, gapContextTmp);
  const gapHasBreakpoints = hasGapBreakpoints(gapContext);

  const col = gapHasBreakpoints ? getAllBreakpoints(breakpointsSorted, null, colTmp) : colTmp;
  const row = gapHasBreakpoints ? getAllBreakpoints(breakpointsSorted, null, rowTmp) : rowTmp;
  const colOffset = gapHasBreakpoints
    ? getAllBreakpoints(breakpointsSorted, 0, colOffsetTmp)
    : colOffsetTmp;

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
