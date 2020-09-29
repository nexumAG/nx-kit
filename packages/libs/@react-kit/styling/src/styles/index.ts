import { ThemedStyledProps, CSSProperties } from 'styled-components';
import { Theme } from '../theme';

// https://github.com/frenic/csstype

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

const getValue = (key: string, value: any, themeLookup?: any) => {
  // eslint-disable-next-line no-nested-ternary
  return value
    ? themeLookup
      ? { [key]: themeLookup[value] }
      : { [key]: value }
    : {};
};

const getLiteralOrBreakpointValue = (
  key: string,
  value: LiteralOrBreakpoints<any>,
  themeLookup?: any
): any => {
  if (typeof value === 'object') {
    return {};
  }
  return getValue(key, value, themeLookup);
};

export const getSpacing = () => {
  return ({
    styles,
    theme,
  }: ThemedStyledProps<{ styles?: Spacing }, Theme>) => ({
    ...(styles?.marginTop
      ? { marginTop: theme.global.spacing[styles.marginTop] }
      : {}),
    ...(styles?.marginBottom
      ? { marginBottom: theme.global.spacing[styles.marginBottom] }
      : {}),
    ...(styles?.marginLeft
      ? { marginLeft: theme.global.spacing[styles.marginLeft] }
      : {}),
    ...(styles?.marginRight
      ? { marginRight: theme.global.spacing[styles.marginRight] }
      : {}),
    ...(styles?.margin ? { margin: theme.global.spacing[styles.margin] } : {}),
    ...(styles?.paddingTop
      ? { paddingTop: theme.global.spacing[styles.paddingTop] }
      : {}),
    ...(styles?.paddingBottom
      ? { paddingBottom: theme.global.spacing[styles.paddingBottom] }
      : {}),
    ...(styles?.paddingLeft
      ? { paddingLeft: theme.global.spacing[styles.paddingLeft] }
      : {}),
    ...(styles?.paddingRight
      ? { paddingRight: theme.global.spacing[styles.paddingRight] }
      : {}),
    ...(styles?.padding
      ? { padding: theme.global.spacing[styles.padding] }
      : {}),
  });
};

export const getFlexItem = () => {
  return ({ styles }: ThemedStyledProps<{ styles?: FlexItem }, Theme>) => ({
    ...(styles?.flexGrow ? { flexGrow: styles.flexGrow } : {}),
    ...(styles?.flexShrink ? { flexShrink: styles.flexShrink } : {}),
    ...(styles?.flexBasis ? { flexBasis: styles.flexBasis } : {}),
    ...(styles?.flex ? { flex: styles.flex } : {}),
    ...(styles?.alignSelf ? { alignSelf: styles.alignSelf } : {}),
    ...(styles?.order ? { order: styles.order } : {}),
  });
};

export const getFlexContainer = () => {
  return (
    props: ThemedStyledProps<FlexContainer & { styles?: FlexContainer }, Theme>
  ) => ({
    ...(props.styles?.alignContent
      ? { alignContent: props.styles.alignContent }
      : {}),
    ...(props.styles?.alignItems
      ? { alignItems: props.styles.alignItems }
      : {}),
    ...(props.styles?.flexDirection
      ? { flexDirection: props.styles.flexDirection }
      : {}),
    ...(props.styles?.flexFlow ? { flexFlow: props.styles.flexFlow } : {}),
    ...(props.styles?.flexWrap ? { flexWrap: props.styles.flexWrap } : {}),
    ...(props.styles?.justifyContent
      ? { justifyContent: props.styles.justifyContent }
      : {}),
    ...(props.alignContent ? { alignContent: props.alignContent } : {}),
    ...(props.alignItems ? { alignItems: props.alignItems } : {}),
    ...(props.flexDirection ? { flexDirection: props.flexDirection } : {}),
    ...(props.flexFlow ? { flexFlow: props.flexFlow } : {}),
    ...(props.flexWrap ? { flexWrap: props.flexWrap } : {}),
    ...(props.justifyContent ? { justifyContent: props.justifyContent } : {}),
  });
};

export const getPosition = () => {
  return ({
    styles,
    theme,
  }: ThemedStyledProps<{ styles?: Position }, Theme>) => ({
    ...(styles?.position ? { position: styles.position } : {}),
    ...(styles?.top ? { top: styles.top } : {}),
    ...(styles?.right ? { right: styles.right } : {}),
    ...(styles?.bottom ? { bottom: styles.bottom } : {}),
    ...(styles?.left ? { left: styles.left } : {}),
    ...(styles?.zIndex ? { zIndex: theme.global.zIndex[styles.zIndex] } : {}),
  });
};
