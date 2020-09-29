import { ThemedStyledProps, CSSProperties } from 'styled-components';
import { Theme } from '../theme';
import { media } from '../utils';

type SpacingKey = keyof Theme['global']['spacing'];
type ZIndexKey = keyof Theme['global']['zIndex'];
type BreakpointKey = keyof Theme['global']['breakpoint'];

type LiteralOrBreakpoints<T> =
  | T
  | {
      [key in BreakpointKey]: T;
    };

export type Spacing = {
  marginTop?: LiteralOrBreakpoints<SpacingKey>;
  marginBottom?: LiteralOrBreakpoints<SpacingKey>;
  marginLeft?: LiteralOrBreakpoints<SpacingKey>;
  marginRight?: LiteralOrBreakpoints<SpacingKey>;
  margin?: LiteralOrBreakpoints<SpacingKey>;
  paddingTop?: LiteralOrBreakpoints<SpacingKey>;
  paddingBottom?: LiteralOrBreakpoints<SpacingKey>;
  paddingLeft?: LiteralOrBreakpoints<SpacingKey>;
  paddingRight?: LiteralOrBreakpoints<SpacingKey>;
  padding?: LiteralOrBreakpoints<SpacingKey>;
};

export type FlexItem = {
  flexGrow?: LiteralOrBreakpoints<CSSProperties['flexGrow']>;
  flexShrink?: LiteralOrBreakpoints<CSSProperties['flexShrink']>;
  flexBasis?: LiteralOrBreakpoints<CSSProperties['flexBasis']>;
  flex?: LiteralOrBreakpoints<CSSProperties['flex']>;
  alignSelf?: LiteralOrBreakpoints<CSSProperties['alignSelf']>;
  order?: LiteralOrBreakpoints<CSSProperties['order']>;
};

export type FlexContainer = {
  alignContent?: LiteralOrBreakpoints<CSSProperties['alignContent']>;
  alignItems?: LiteralOrBreakpoints<CSSProperties['alignItems']>;
  flexDirection?: LiteralOrBreakpoints<CSSProperties['flexDirection']>;
  flexFlow?: LiteralOrBreakpoints<CSSProperties['flexFlow']>;
  flexWrap?: LiteralOrBreakpoints<CSSProperties['flexWrap']>;
  justifyContent?: LiteralOrBreakpoints<CSSProperties['justifyContent']>;
};

export type Position = {
  position?: LiteralOrBreakpoints<CSSProperties['position']>;
  top?: LiteralOrBreakpoints<CSSProperties['top']>;
  right?: LiteralOrBreakpoints<CSSProperties['right']>;
  bottom?: LiteralOrBreakpoints<CSSProperties['bottom']>;
  left?: LiteralOrBreakpoints<CSSProperties['left']>;
  zIndex?: LiteralOrBreakpoints<ZIndexKey>;
};

type DirectOrStylesProp<T> = T & { styles?: T };

const getValue = (key: string, value: any, themeLookup?: any) => {
  // eslint-disable-next-line no-nested-ternary
  return value
    ? themeLookup
      ? { [key]: themeLookup[value] ?? value }
      : { [key]: value }
    : {};
};

const getLiteralOrBreakpointValue = (
  key: string,
  {
    theme,
    ...props
  }: { theme: Theme } & DirectOrStylesProp<LiteralOrBreakpoints<any> | null>,
  themeLookup?: any
): any => {
  const value = props[key] ?? props.styles?.[key];

  if (!value) {
    return {};
  }
  if (typeof value === 'object') {
    return Object.keys(value).reduce((acc, breakpoint) => {
      const mediaQuery = media(breakpoint)({ theme });
      return {
        ...acc,
        [mediaQuery]: getValue(key, value[breakpoint], themeLookup),
      };
    }, {});
  }
  return getValue(key, value, themeLookup);
};

export const getSpacing = () => {
  return (props: ThemedStyledProps<DirectOrStylesProp<Spacing>, Theme>) => {
    const themeLookup = props.theme.global.spacing;
    return {
      ...getLiteralOrBreakpointValue('marginTop', props, themeLookup),
      ...getLiteralOrBreakpointValue('marginBottom', props, themeLookup),
      ...getLiteralOrBreakpointValue('marginLeft', props, themeLookup),
      ...getLiteralOrBreakpointValue('marginRight', props, themeLookup),
      ...getLiteralOrBreakpointValue('margin', props, themeLookup),
      ...getLiteralOrBreakpointValue('paddingTop', props, themeLookup),
      ...getLiteralOrBreakpointValue('paddingBottom', props, themeLookup),
      ...getLiteralOrBreakpointValue('paddingLeft', props, themeLookup),
      ...getLiteralOrBreakpointValue('paddingRight', props, themeLookup),
      ...getLiteralOrBreakpointValue('padding', props, themeLookup),
    };
  };
};

export const getFlexItem = () => {
  return (props: ThemedStyledProps<DirectOrStylesProp<FlexItem>, Theme>) => ({
    ...getLiteralOrBreakpointValue('flexGrow', props),
    ...getLiteralOrBreakpointValue('flexShrink', props),
    ...getLiteralOrBreakpointValue('flexBasis', props),
    ...getLiteralOrBreakpointValue('flex', props),
    ...getLiteralOrBreakpointValue('alignSelf', props),
    ...getLiteralOrBreakpointValue('order', props),
  });
};

export const getFlexContainer = () => {
  return (
    props: ThemedStyledProps<DirectOrStylesProp<FlexContainer>, Theme>
  ) => ({
    ...getLiteralOrBreakpointValue('alignContent', props),
    ...getLiteralOrBreakpointValue('alignItems', props),
    ...getLiteralOrBreakpointValue('flexDirection', props),
    ...getLiteralOrBreakpointValue('flexFlow', props),
    ...getLiteralOrBreakpointValue('flexWrap', props),
    ...getLiteralOrBreakpointValue('justifyContent', props),
  });
};

export const getPosition = () => {
  return (props: ThemedStyledProps<DirectOrStylesProp<Position>, Theme>) => ({
    ...getLiteralOrBreakpointValue('position', props),
    ...getLiteralOrBreakpointValue('top', props),
    ...getLiteralOrBreakpointValue('right', props),
    ...getLiteralOrBreakpointValue('bottom', props),
    ...getLiteralOrBreakpointValue('left', props),
    ...getLiteralOrBreakpointValue('zIndex', props, props.theme.global.zIndex),
  });
};
