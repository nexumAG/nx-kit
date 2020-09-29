import { defaultTheme } from '../../packages/libs/@react-kit/styling-default-theme';

declare module '@react-kit/styling' {
  export type Theme = typeof defaultTheme;
}
