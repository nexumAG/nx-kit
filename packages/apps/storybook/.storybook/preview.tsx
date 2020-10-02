import React from 'react';
import { ThemeProvider, createGlobalStyle, resetCSS } from '@nx-kit/styling';
import { theme, globalCSS } from '@nx-kit/theme-default';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const GlobalStyle = createGlobalStyle`
  ${resetCSS}
  ${globalCSS}
`;

export const decorators = [
  (Story: any) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
