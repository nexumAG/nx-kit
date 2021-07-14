import { theme } from '../../../theme';

declare module 'styled-components' {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}

declare module '@nx-kit/styling' {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {}
}

// declare module '@nx-kit/flex' {
//   type ThemeType = typeof theme;
//   export interface DefaultTheme extends ThemeType {}
// }
