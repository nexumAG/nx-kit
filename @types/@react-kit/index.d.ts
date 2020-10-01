import { theme } from '../../packages/libs/@react-kit/theme-default';

declare module '@react-kit/styling' {
  export type Theme = typeof theme;
}
