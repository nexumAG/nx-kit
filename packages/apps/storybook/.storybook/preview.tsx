import React from 'react';
import { ThemeProvider, createGlobalStyle, resetCSS } from '@react-kit/styling';
import { theme } from '@react-kit/theme-default';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const GlobalStyle = createGlobalStyle`
  ${resetCSS}
  body {
    font-size: 16px;
    font-family: "Trebuchet MS", Helvetica, sans-serif;
  }
`;

export const decorators = [
  (Story: any) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
