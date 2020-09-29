import { ThemedStyledProps, CSSProperties } from 'styled-components';
import { Theme } from '../theme';

// https://github.com/frenic/csstype

type SpacingKey = keyof Theme['global']['spacing'];

export type Spacing = {
  marginTop?: SpacingKey;
  marginBottom?: SpacingKey;
  marginLeft?: SpacingKey;
  marginRight?: SpacingKey;
  margin?: SpacingKey;
  paddingTop?: SpacingKey;
  paddingBottom?: SpacingKey;
  paddingLeft?: SpacingKey;
  paddingRight?: SpacingKey;
  padding?: SpacingKey;
};

export type FlexItem = {
  flexGrow?: CSSProperties['flexGrow'];
  flexShrink?: CSSProperties['flexShrink'];
  flexBasis?: CSSProperties['flexBasis'];
  flex?: CSSProperties['flex'];
  alignSelf?: CSSProperties['alignSelf'];
  order?: CSSProperties['order'];
};

export type FlexContainer = {
  alignContent?: CSSProperties['alignContent'];
  alignItems?: CSSProperties['alignItems'];
  flexDirection?: CSSProperties['flexDirection'];
  flexFlow?: CSSProperties['flexFlow'];
  flexWrap?: CSSProperties['flexWrap'];
  justifyContent?: CSSProperties['justifyContent'];
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
  return ({
    styles,
  }: ThemedStyledProps<{ styles?: FlexContainer }, Theme>) => ({
    ...(styles?.alignContent ? { alignContent: styles.alignContent } : {}),
    ...(styles?.alignItems ? { alignItems: styles.alignItems } : {}),
    ...(styles?.flexDirection ? { flexDirection: styles.flexDirection } : {}),
    ...(styles?.flexFlow ? { flexFlow: styles.flexFlow } : {}),
    ...(styles?.flexWrap ? { flexWrap: styles.flexWrap } : {}),
    ...(styles?.justifyContent
      ? { justifyContent: styles.justifyContent }
      : {}),
  });
};
