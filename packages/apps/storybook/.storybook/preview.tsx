import React from 'react';
import { ThemeProvider, createGlobalStyle, resetCSS } from '@react-kit/styling';
import { defaultTheme } from '@react-kit/styling-default-theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const GlobalStyle = createGlobalStyle`
  ${resetCSS}
`;

export const decorators = [
  (Story: any) => (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
