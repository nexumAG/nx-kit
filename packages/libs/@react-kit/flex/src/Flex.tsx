import React from 'react';
import {
  styled,
  getFlexContainer,
  getPosition,
  getSpacing,
  getColor,
  getLayout,
  LiteralOrBreakpoints,
  FlexContainer,
  parseGap,
  Theme,
  useTheme,
} from '@react-kit/styling';
import { FlexProps, FlexStyledProps } from './Flex.types';

export type FlexContextGap = LiteralOrBreakpoints<{
  rowGap: string;
  columnGap: string;
}>;

export const FlexContext = React.createContext<{
  gap?: FlexContextGap;
}>({});

const FlexStyled = styled.div<FlexStyledProps>`
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  ${getFlexContainer()}
  ${getPosition()}
  ${getSpacing()}
  ${getColor()}
  ${getLayout()}
`;

const getGapValue = (theme: Theme, gap?: FlexContainer['gap']): FlexContextGap => {
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

export const Flex = ({ className, children, as, styles, inline, ...rest }: FlexProps) => {
  const { gap } = rest;
  const theme = useTheme();
  return (
    <FlexContext.Provider value={{ gap: getGapValue(theme, gap) }}>
      <FlexStyled className={className} as={as} styles={styles} inline={inline} {...rest}>
        {children}
      </FlexStyled>
    </FlexContext.Provider>
  );
};
