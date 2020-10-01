import { theme } from '../../packages/libs/@nx-kit/theme-default';

declare module '@nx-kit/styling' {
  export type Theme = typeof theme;
}
