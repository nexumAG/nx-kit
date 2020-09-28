import React from 'react';
import { ThemeProvider, Theme } from '@react-kit/styling';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const theme: Theme = {
  global: {
    color: {
      primary: 'blue',
    },
    breakpoint: {
      mobile: '',
    },
  },
  component: {
    heading: {
      skin: {
        100: `
          color: blue;
          font-size: 16px;
          @media only screen and (min-width: 768px) {
            font-size: 32px;
          }
        `,
        200: `
          color: red;
          font-size: 16px;
          @media only screen and (min-width: 768px) {
            font-size: 32px;
          }
        `,
      },
    },
  },
};

export const decorators = [
  (Story: any) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
