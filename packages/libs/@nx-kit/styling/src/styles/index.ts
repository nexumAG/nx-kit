import { ThemedStyledProps, CSSProperties } from 'styled-components';
import type { Theme } from '../theme';
import type { DefaultTheme } from '../external';
import { media } from '../utils';

type ThemeGlobalKey<K extends string | number, T> = {
  global: {
    [key in K]: T;
  };
};

type ThemeSpacings = ThemeGlobalKey<'spacing', Theme['global']['spacing']>;
type ThemeZIndices = ThemeGlobalKey<'zIndex', Theme['global']['zIndex']>;
type ThemeBreakpoints = ThemeGlobalKey<'breakpoint', Theme['global']['breakpoint']>;
type ThemeColors = ThemeGlobalKey<'color', Theme['global']['color']>;
type ThemeFonts = ThemeGlobalKey<'font', Theme['global']['font']>;
type ThemeFontSizes = ThemeGlobalKey<'fontSize', Theme['global']['fontSize']>;
type ThemeLineHeights = ThemeGlobalKey<'lineHeight', Theme['global']['lineHeight']>;

type SpacingKeyG<T extends ThemeSpacings> = keyof T['global']['spacing'];
export type SpacingKey = SpacingKeyG<DefaultTheme extends ThemeSpacings ? DefaultTheme : any>;

type ZIndexKeyG<T extends ThemeZIndices> = keyof T['global']['zIndex'];
export type ZIndexKey = ZIndexKeyG<DefaultTheme extends ThemeZIndices ? DefaultTheme : any>;

export type BreakpointKey<T extends ThemeBreakpoints> = keyof T['global']['breakpoint'];

type ColorKeyG<T extends ThemeColors> = keyof T['global']['color'];
export type ColorKey = ColorKeyG<DefaultTheme extends ThemeColors ? DefaultTheme : any>;

type FontKeyG<T extends ThemeFonts> = keyof T['global']['font'];
export type FontKey = FontKeyG<DefaultTheme extends ThemeFonts ? DefaultTheme : any>;

type FontSizeKeyG<T extends ThemeFontSizes> = keyof T['global']['fontSize'];
export type FontSizeKey = FontSizeKeyG<DefaultTheme extends ThemeFontSizes ? DefaultTheme : any>;

type LineHeightKeyG<T extends ThemeLineHeights> = keyof T['global']['lineHeight'];
export type LineHeightKey = LineHeightKeyG<
  DefaultTheme extends ThemeLineHeights ? DefaultTheme : any
>;

export type Breakpoints<K, T> = Partial<
  Record<BreakpointKey<T extends ThemeBreakpoints ? T : never>, K>
>;

export type LiteralOrBreakpoints<K, T = DefaultTheme> = K | Breakpoints<K, T>;

// component skins

type ThemeComponentSkinKey<C extends string, T> = {
  component: {
    [component in C]: {
      skin: T;
    };
  };
};

type ThemeSkinsHeading = ThemeComponentSkinKey<'heading', Theme['component']['heading']['skin']>;
export type HeadingSkins<T extends ThemeSkinsHeading> = keyof T['component']['heading']['skin'];

type ThemeSkinsText = ThemeComponentSkinKey<'text', Theme['component']['text']['skin']>;
export type TextSkins<T extends ThemeSkinsText> = keyof T['component']['text']['skin'];

type ThemeSkinsButton = ThemeComponentSkinKey<'button', Theme['component']['button']['skin']>;
export type ButtonSkins<T extends ThemeSkinsButton> = keyof T['component']['button']['skin'];

type ThemeSkinsLink = ThemeComponentSkinKey<'link', Theme['component']['link']['skin']>;
export type LinkSkins<T extends ThemeSkinsLink> = keyof T['component']['link']['skin'];

type ThemeSkinsDivider = ThemeComponentSkinKey<'divider', Theme['component']['divider']['skin']>;
export type DividerSkins<T extends ThemeSkinsDivider> = keyof T['component']['divider']['skin'];

type ThemeSkinsOverlay = ThemeComponentSkinKey<'overlay', Theme['component']['overlay']['skin']>;
export type OverlaySkins<T extends ThemeSkinsOverlay> = keyof T['component']['overlay']['skin'];

type ThemeSkinsTextfield = ThemeComponentSkinKey<
  'textfield',
  Theme['component']['textfield']['skin']
>;
export type TextfieldSkins<T extends ThemeSkinsTextfield> =
  keyof T['component']['textfield']['skin'];

type ThemeSkinsCheckbox = ThemeComponentSkinKey<'checkbox', Theme['component']['checkbox']['skin']>;
export type CheckboxSkins<T extends ThemeSkinsCheckbox> = keyof T['component']['checkbox']['skin'];

type ThemeSkinsAccordion = ThemeComponentSkinKey<
  'accordion',
  Theme['component']['accordion']['skin']
>;
export type AccordionSkins<T extends ThemeSkinsAccordion> =
  keyof T['component']['accordion']['skin'];

type ThemeSkinsTabs = ThemeComponentSkinKey<'tabs', Theme['component']['tabs']['skin']>;
export type TabsSkins<T extends ThemeSkinsTabs> = keyof T['component']['tabs']['skin'];

type ThemeSkinsMeter = ThemeComponentSkinKey<'meter', Theme['component']['meter']['skin']>;
export type MeterSkins<T extends ThemeSkinsMeter> = keyof T['component']['meter']['skin'];

type ThemeSkinsSelect = ThemeComponentSkinKey<'select', Theme['component']['select']['skin']>;
export type SelectSkins<T extends ThemeSkinsSelect> = keyof T['component']['select']['skin'];

export type Spacing = {
  marginTop?: LiteralOrBreakpoints<SpacingKey | CSSProperties['marginTop']>;
  marginBottom?: LiteralOrBreakpoints<SpacingKey | CSSProperties['marginBottom']>;
  marginLeft?: LiteralOrBreakpoints<SpacingKey | CSSProperties['marginLeft']>;
  marginRight?: LiteralOrBreakpoints<SpacingKey | CSSProperties['marginRight']>;
  margin?: LiteralOrBreakpoints<SpacingKey | CSSProperties['margin']>;
  marginX?: LiteralOrBreakpoints<SpacingKey | CSSProperties['marginLeft']>;
  marginY?: LiteralOrBreakpoints<SpacingKey | CSSProperties['marginTop']>;
  paddingTop?: LiteralOrBreakpoints<SpacingKey | CSSProperties['paddingTop']>;
  paddingBottom?: LiteralOrBreakpoints<SpacingKey | CSSProperties['paddingBottom']>;
  paddingLeft?: LiteralOrBreakpoints<SpacingKey | CSSProperties['paddingLeft']>;
  paddingRight?: LiteralOrBreakpoints<SpacingKey | CSSProperties['paddingRight']>;
  padding?: LiteralOrBreakpoints<SpacingKey | CSSProperties['padding']>;
  paddingX?: LiteralOrBreakpoints<SpacingKey | CSSProperties['paddingLeft']>;
  paddingY?: LiteralOrBreakpoints<SpacingKey | CSSProperties['paddingTop']>;
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
  gap?: LiteralOrBreakpoints<SpacingKey | CSSProperties['gap']>;
  gapNative?: LiteralOrBreakpoints<SpacingKey | CSSProperties['gap']>;
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

export type DirectOrStylesProp<T> = T | { styles?: T };

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

export const getLiteralOrBreakpointString = (
  key: string,
  {
    theme,
    ...props
  }: { theme: DefaultTheme } & DirectOrStylesProp<LiteralOrBreakpoints<any> | null>,
  themeLookup?: any
): string => {
  const value = props[key] ?? props.styles?.[key];

  if (!value) {
    return '';
  }
  if (typeof value === 'object') {
    // TODO: sort breakpoints
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

export const merge = (...objects: any[]) => {
  const merged: any = {};
  const { length } = objects;
  for (let i = 0; i < length; i += 1) {
    const obj = objects[i];
    // eslint-disable-next-line no-restricted-syntax
    for (const prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        const value = obj[prop];
        if (typeof value === 'object') {
          merged[prop] = { ...merged[prop], ...value };
        } else {
          merged[prop] = value;
        }
      }
    }
  }
  return merged;
};

const getKeySortValue = (key: string): number | string => {
  const matched = /^@media \(min-width: ([0-9.]+)px\)$/.exec(key);
  if (matched) {
    return parseFloat(matched[1]);
  }
  return key;
};

export const compose = (...objects: any[]): any => {
  return (props: ThemedStyledProps<DirectOrStylesProp<any>, Theme>) => {
    const merged = merge(...objects.map((object) => object(props)));
    const sorted = Object.fromEntries(
      Object.entries(merged).sort((a: [string, any], b: [string, any]) => {
        const aSort = getKeySortValue(a[0]);
        const bSort = getKeySortValue(b[0]);

        if (typeof aSort === 'number' && typeof bSort === 'string') {
          return 1;
        }

        if (typeof aSort === 'string' && typeof bSort === 'number') {
          return -1;
        }

        if (typeof aSort === 'string' && typeof bSort === 'string') {
          // eslint-disable-next-line no-nested-ternary
          return aSort > bSort ? 1 : aSort < bSort ? -1 : 0;
        }

        if (typeof aSort === 'number' && typeof bSort === 'number') {
          return aSort - bSort;
        }

        return 0;
      })
    );

    return sorted;
  };
};

export const getSpacing = (props: ThemedStyledProps<DirectOrStylesProp<Spacing>, Theme>) => {
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
    getLiteralOrBreakpointValue('padding', props, themeLookup),
    getLiteralOrBreakpointValue('marginX', props, themeLookup, (_: string, propValue: any) => {
      const value = themeLookup?.[propValue] ?? propValue;
      return {
        marginLeft: value,
        marginRight: value,
      };
    }),
    getLiteralOrBreakpointValue('marginY', props, themeLookup, (_: string, propValue: any) => {
      const value = themeLookup?.[propValue] ?? propValue;
      return {
        marginTop: value,
        marginBottom: value,
      };
    }),
    getLiteralOrBreakpointValue('paddingX', props, themeLookup, (_: string, propValue: any) => {
      const value = themeLookup?.[propValue] ?? propValue;
      return {
        paddingLeft: value,
        paddingRight: value,
      };
    }),
    getLiteralOrBreakpointValue('paddingY', props, themeLookup, (_: string, propValue: any) => {
      const value = themeLookup?.[propValue] ?? propValue;
      return {
        paddingTop: value,
        paddingBottom: value,
      };
    })
  );
};

export const getFlexItem = (props: ThemedStyledProps<DirectOrStylesProp<FlexItem>, Theme>) => {
  return merge(
    getLiteralOrBreakpointValue('flexGrow', props),
    getLiteralOrBreakpointValue('flexShrink', props),
    getLiteralOrBreakpointValue('flexBasis', props),
    getLiteralOrBreakpointValue('flex', props),
    getLiteralOrBreakpointValue('alignSelf', props),
    getLiteralOrBreakpointValue('order', props)
  );
};

export const parseGap = (gap?: string | number, theme?: Theme) => {
  if (!gap) {
    return { rowGap: '0px', columnGap: '0px' };
  }
  const [rowGapTmp, columnGapTmp] = gap.toString().split(' ');
  const themeLookup = theme?.global?.spacing;
  const rowGap = themeLookup?.[rowGapTmp] ?? (rowGapTmp === '0' ? '0px' : rowGapTmp);
  const columnGap =
    typeof columnGapTmp !== 'undefined'
      ? themeLookup?.[columnGapTmp] ?? (columnGapTmp === '0' ? '0px' : columnGapTmp)
      : rowGap;
  return { rowGap, columnGap };
};

export const getFlexContainer = (
  props: ThemedStyledProps<DirectOrStylesProp<FlexContainer>, Theme>
) => {
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
    }),
    getLiteralOrBreakpointValue('gapNative', props, null, (_: string, value: string) => {
      return {
        gap: value,
      };
    })
  );
};

export const getPosition = (props: ThemedStyledProps<DirectOrStylesProp<Position>, Theme>) => {
  return merge(
    getLiteralOrBreakpointValue('position', props),
    getLiteralOrBreakpointValue('top', props),
    getLiteralOrBreakpointValue('right', props),
    getLiteralOrBreakpointValue('bottom', props),
    getLiteralOrBreakpointValue('left', props),
    getLiteralOrBreakpointValue('zIndex', props, props.theme?.global?.zIndex)
  );
};

export const getColor = (props: ThemedStyledProps<DirectOrStylesProp<Color>, Theme>) => {
  return merge(
    getLiteralOrBreakpointValue('color', props, props.theme?.global?.color),
    getLiteralOrBreakpointValue('backgroundColor', props, props.theme?.global?.color),
    getLiteralOrBreakpointValue('opacity', props)
  );
};

export const getLayout = (props: ThemedStyledProps<DirectOrStylesProp<Layout>, Theme>) => {
  return merge(
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

export const getFont = (props: ThemedStyledProps<DirectOrStylesProp<Font>, DefaultTheme>) => {
  return getLiteralOrBreakpointString('font', props, props.theme?.global?.font);
};

export const getTypo = (props: ThemedStyledProps<DirectOrStylesProp<Typo>, Theme>) => {
  return merge(
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
