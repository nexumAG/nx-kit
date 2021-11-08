import { theme } from '../../../theme';

declare module '@nx-kit/styling' {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {}
}

// declare module '@nx-kit/flex' {
//   type ThemeType = typeof theme;
//   export interface DefaultTheme extends ThemeType {}
// }
