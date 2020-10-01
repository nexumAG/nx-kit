import { ThemedStyledProps, CSSProperties } from 'styled-components';
import { Theme } from '../theme';
import { media } from '../utils';

type SpacingKey = keyof Theme['global']['spacing'];
type ZIndexKey = keyof Theme['global']['zIndex'];
type BreakpointKey = keyof Theme['global']['breakpoint'];
type ColorKey = keyof Theme['global']['color'];
type FontKey = keyof Theme['global']['font'];
type FontSizeKey = keyof Theme['global']['fontSize'];
type LineHeightKey = keyof Theme['global']['lineHeight'];

export type Breakpoints<T> = {
  [key in BreakpointKey]: T;
};

export type LiteralOrBreakpoints<T> = T | Breakpoints<T>;

export type Spacing = {
  marginTop?: LiteralOrBreakpoints<SpacingKey | CSSProperties['marginTop']>;
  marginBottom?: LiteralOrBreakpoints<SpacingKey | CSSProperties['marginBottom']>;
  marginLeft?: LiteralOrBreakpoints<SpacingKey | CSSProperties['marginLeft']>;
  marginRight?: LiteralOrBreakpoints<SpacingKey | CSSProperties['marginRight']>;
  margin?: LiteralOrBreakpoints<SpacingKey | CSSProperties['margin']>;
  paddingTop?: LiteralOrBreakpoints<SpacingKey | CSSProperties['paddingTop']>;
  paddingBottom?: LiteralOrBreakpoints<SpacingKey | CSSProperties['paddingBottom']>;
  paddingLeft?: LiteralOrBreakpoints<SpacingKey | CSSProperties['paddingLeft']>;
  paddingRight?: LiteralOrBreakpoints<SpacingKey | CSSProperties['paddingRight']>;
  padding?: LiteralOrBreakpoints<SpacingKey | CSSProperties['padding']>;
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
  gap?: LiteralOrBreakpoints<SpacingKey | string>;
};

export type Position = {
  position?: LiteralOrBreakpoints<CSSProperties['position']>;
  top?: LiteralOrBreakpoints<CSSProperties['top']>;
  right?: LiteralOrBreakpoints<CSSProperties['right']>;
  bottom?: LiteralOrBreakpoints<CSSProperties['bottom']>;
  left?: LiteralOrBreakpoints<CSSProperties['left']>;
  zIndex?: LiteralOrBreakpoints<ZIndexKey | CSSProperties['zIndex']>;
};

export type Color = {
  color?: LiteralOrBreakpoints<ColorKey | CSSProperties['color']>;
  backgroundColor?: LiteralOrBreakpoints<ColorKey | CSSProperties['backgroundColor']>;
  opacity?: LiteralOrBreakpoints<CSSProperties['opacity']>;
};

export type Layout = {
  width?: LiteralOrBreakpoints<CSSProperties['width']>;
  height?: LiteralOrBreakpoints<CSSProperties['height']>;
  minWidth?: LiteralOrBreakpoints<CSSProperties['minWidth']>;
  maxWidth?: LiteralOrBreakpoints<CSSProperties['maxWidth']>;
  minHeight?: LiteralOrBreakpoints<CSSProperties['minHeight']>;
  maxHeight?: LiteralOrBreakpoints<CSSProperties['maxHeight']>;
  display?: LiteralOrBreakpoints<CSSProperties['display']>;
  verticalAlign?: LiteralOrBreakpoints<CSSProperties['verticalAlign']>;
  overflow?: LiteralOrBreakpoints<CSSProperties['overflow']>;
  overflowX?: LiteralOrBreakpoints<CSSProperties['overflowX']>;
  overflowY?: LiteralOrBreakpoints<CSSProperties['overflowY']>;
};

export type Font = {
  font?: LiteralOrBreakpoints<FontKey>;
};

export type Typo = {
  fontSize?: LiteralOrBreakpoints<FontSizeKey | CSSProperties['fontSize']>;
  lineHeight?: LiteralOrBreakpoints<LineHeightKey | CSSProperties['lineHeight']>;
  letterSpacing?: LiteralOrBreakpoints<CSSProperties['letterSpacing']>;
  textAlign?: LiteralOrBreakpoints<CSSProperties['textAlign']>;
  fontStyle?: LiteralOrBreakpoints<CSSProperties['fontStyle']>;
  textTransform?: LiteralOrBreakpoints<CSSProperties['textTransform']>;
  textDecoration?: LiteralOrBreakpoints<CSSProperties['textDecoration']>;
  textOverflow?: LiteralOrBreakpoints<CSSProperties['textOverflow']>;
};

type DirectOrStylesProp<T> = T | { styles?: T };

const getValue = (key: string, value: any, themeLookup?: any) => {
  // eslint-disable-next-line no-nested-ternary
  return value ? (themeLookup ? { [key]: themeLookup[value] ?? value } : { [key]: value }) : {};
};

const getString = (value: any, themeLookup?: any) => {
  return value ? themeLookup?.[value] ?? '' : '';
};

export const getLiteralOrBreakpointValue = (
  key: string,
  { theme, ...props }: { theme: Theme } & DirectOrStylesProp<LiteralOrBreakpoints<any> | null>,
  themeLookup?: any,
  // eslint-disable-next-line @typescript-eslint/no-shadow
  customFunction?: (key: string, value: any, breakpoint?: string | number) => any
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
        [mediaQuery]: customFunction
          ? customFunction(key, value[breakpoint], breakpoint)
          : getValue(key, value[breakpoint], themeLookup),
      };
    }, {});
  }
  return customFunction ? customFunction(key, value) : getValue(key, value, themeLookup);
};

const getLiteralOrBreakpointString = (
  key: string,
  { theme, ...props }: { theme: Theme } & DirectOrStylesProp<LiteralOrBreakpoints<any> | null>,
  themeLookup?: any
): string => {
  const value = props[key] ?? props.styles?.[key];

  if (!value) {
    return '';
  }
  if (typeof value === 'object') {
    return Object.keys(value).reduce((acc, breakpoint) => {
      const mediaQuery = media(breakpoint)({ theme });
      return `
        ${acc}
        ${mediaQuery} {
          ${getString(value[breakpoint], themeLookup)}
        }
      `;
    }, '');
  }
  return getString(value, themeLookup);
};

const merge = (...objects: any[]) => {
  // create a new object
  const target = {};

  // deep merge the object into the target object
  const merger = (obj: any) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
          // if the property is a nested object
          // @ts-ignore
          target[prop] = merge(target[prop], obj[prop]);
        } else {
          // for regular property
          // @ts-ignore
          target[prop] = obj[prop];
        }
      }
    }
  };

  // iterate through all objects and
  // deep merge them with target
  for (let i = 0; i < objects.length; i += 1) {
    merger(objects[i]);
  }

  return target;
};

export const getSpacing = () => {
  return (props: ThemedStyledProps<DirectOrStylesProp<Spacing>, Theme>) => {
    const themeLookup = props.theme?.global?.spacing;

    return merge(
      getLiteralOrBreakpointValue('marginTop', props, themeLookup),
      getLiteralOrBreakpointValue('marginBottom', props, themeLookup),
      getLiteralOrBreakpointValue('marginLeft', props, themeLookup),
      getLiteralOrBreakpointValue('marginRight', props, themeLookup),
      getLiteralOrBreakpointValue('margin', props, themeLookup),
      getLiteralOrBreakpointValue('paddingTop', props, themeLookup),
      getLiteralOrBreakpointValue('paddingBottom', props, themeLookup),
      getLiteralOrBreakpointValue('paddingLeft', props, themeLookup),
      getLiteralOrBreakpointValue('paddingRight', props, themeLookup),
      getLiteralOrBreakpointValue('padding', props, themeLookup)
    );
  };
};

export const getFlexItem = () => {
  return (props: ThemedStyledProps<DirectOrStylesProp<FlexItem>, Theme>) =>
    merge(
      getLiteralOrBreakpointValue('flexGrow', props),
      getLiteralOrBreakpointValue('flexShrink', props),
      getLiteralOrBreakpointValue('flexBasis', props),
      getLiteralOrBreakpointValue('flex', props),
      getLiteralOrBreakpointValue('alignSelf', props),
      getLiteralOrBreakpointValue('order', props)
    );
};

export const parseGap = (gap: string | number, theme?: Theme) => {
  const [rowGapTmp, columnGapTmp] = gap.toString().split(' ');
  const themeLookup = theme?.global?.spacing;
  const rowGap = themeLookup?.[rowGapTmp] ?? (rowGapTmp === '0' ? '0px' : rowGapTmp);
  const columnGap =
    typeof columnGapTmp !== 'undefined'
      ? themeLookup?.[columnGapTmp] ?? (columnGapTmp === '0' ? '0px' : columnGapTmp)
      : rowGap;
  return { rowGap, columnGap };
};

export const getFlexContainer = () => {
  return (props: ThemedStyledProps<DirectOrStylesProp<FlexContainer>, Theme>) => {
    return merge(
      getLiteralOrBreakpointValue('alignContent', props),
      getLiteralOrBreakpointValue('alignItems', props),
      getLiteralOrBreakpointValue('flexDirection', props),
      getLiteralOrBreakpointValue('flexFlow', props),
      getLiteralOrBreakpointValue('flexWrap', props),
      getLiteralOrBreakpointValue('justifyContent', props),
      getLiteralOrBreakpointValue('gap', props, null, (_: string, value: string) => {
        const { rowGap, columnGap } = parseGap(value, props.theme);
        return {
          margin: `calc(${rowGap} / -2) calc(${columnGap} / -2)`,
          '& > *': {
            margin: `calc(${rowGap} / 2) calc(${columnGap} / 2)`,
          },
        };
      })
    );
  };
};

export const getPosition = () => {
  return (props: ThemedStyledProps<DirectOrStylesProp<Position>, Theme>) =>
    merge(
      getLiteralOrBreakpointValue('position', props),
      getLiteralOrBreakpointValue('top', props),
      getLiteralOrBreakpointValue('right', props),
      getLiteralOrBreakpointValue('bottom', props),
      getLiteralOrBreakpointValue('left', props),
      getLiteralOrBreakpointValue('zIndex', props, props.theme?.global?.zIndex)
    );
};

export const getColor = () => {
  return (props: ThemedStyledProps<DirectOrStylesProp<Color>, Theme>) =>
    merge(
      getLiteralOrBreakpointValue('color', props, props.theme?.global?.color),
      getLiteralOrBreakpointValue('backgroundColor', props, props.theme?.global?.color),
      getLiteralOrBreakpointValue('opacity', props)
    );
};

export const getLayout = () => {
  return (props: ThemedStyledProps<DirectOrStylesProp<Layout>, Theme>) =>
    merge(
      getLiteralOrBreakpointValue('width', props),
      getLiteralOrBreakpointValue('height', props),
      getLiteralOrBreakpointValue('minWidth', props),
      getLiteralOrBreakpointValue('maxWidth', props),
      getLiteralOrBreakpointValue('minHeight', props),
      getLiteralOrBreakpointValue('maxHeight', props),
      getLiteralOrBreakpointValue('display', props),
      getLiteralOrBreakpointValue('verticalAlign', props),
      getLiteralOrBreakpointValue('overflow', props),
      getLiteralOrBreakpointValue('overflowX', props),
      getLiteralOrBreakpointValue('overflowY', props)
    );
};

export const getFont = () => {
  return (props: ThemedStyledProps<DirectOrStylesProp<Font>, Theme>) =>
    getLiteralOrBreakpointString('font', props, props.theme?.global?.font);
};

export const getTypo = () => {
  return (props: ThemedStyledProps<DirectOrStylesProp<Typo>, Theme>) =>
    merge(
      getLiteralOrBreakpointValue('fontSize', props, props.theme?.global?.fontSize),
      getLiteralOrBreakpointValue('lineHeight', props, props.theme?.global?.lineHeight),
      getLiteralOrBreakpointValue('letterSpacing', props),
      getLiteralOrBreakpointValue('textAlign', props),
      getLiteralOrBreakpointValue('fontStyle', props),
      getLiteralOrBreakpointValue('textTransform', props),
      getLiteralOrBreakpointValue('textDecoration', props),
      getLiteralOrBreakpointValue('textOverflow', props)
    );
};
