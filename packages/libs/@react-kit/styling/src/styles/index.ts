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
