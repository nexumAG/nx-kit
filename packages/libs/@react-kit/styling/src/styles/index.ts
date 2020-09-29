import { StyledProps } from 'styled-components';

// https://github.com/frenic/csstype

export type Spacing = {
  marginTop?: string;
  marginBottom?: string;
  mb?: string;
  marginLeft?: string;
  marginRight?: string;
  margin?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  padding?: string;
};

export type FlexItem = {
  flexGrow?:
    | 'inherit'
    | 'initial'
    | '-moz-initial'
    | 'revert'
    | 'unset'
    | (number & {});
  flexShrink?:
    | 'inherit'
    | 'initial'
    | '-moz-initial'
    | 'revert'
    | 'unset'
    | (number & {});
  flexBasis?: string;
  flex?: string;
};

export const getSpacing = () => {
  return ({ styles }: StyledProps<{ styles?: Spacing }>) => ({
    ...(styles?.marginTop ? { marginTop: styles.marginTop } : {}),
    ...(styles?.marginBottom ? { marginBottom: styles.marginBottom } : {}),
    ...(styles?.mb ? { marginBottom: styles.mb } : {}),
    ...(styles?.marginLeft ? { marginLeft: styles.marginLeft } : {}),
    ...(styles?.marginRight ? { marginRight: styles.marginRight } : {}),
    ...(styles?.margin ? { margin: styles.margin } : {}),
    ...(styles?.paddingTop ? { paddingTop: styles.paddingTop } : {}),
    ...(styles?.paddingBottom ? { paddingBottom: styles.paddingBottom } : {}),
    ...(styles?.paddingLeft ? { paddingLeft: styles.paddingLeft } : {}),
    ...(styles?.paddingRight ? { paddingRight: styles.paddingRight } : {}),
    ...(styles?.padding ? { padding: styles.padding } : {}),
  });
};

export const getFlexItem = () => {
  return ({ styles }: StyledProps<{ styles?: FlexItem }>) => ({
    ...(styles?.flexGrow ? { flexGrow: styles.flexGrow } : {}),
    ...(styles?.flexShrink ? { marginBottom: styles.flexShrink } : {}),
    ...(styles?.flexBasis ? { marginLeft: styles.flexBasis } : {}),
    ...(styles?.flex ? { marginRight: styles.flex } : {}),
  });
};
