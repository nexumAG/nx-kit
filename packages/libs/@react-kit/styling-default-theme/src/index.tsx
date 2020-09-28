import { Theme, css, media } from '@react-kit/styling';

export const defaultTheme: Theme = {
  global: {
    color: {
      primary: 'purple',
    },
    breakpoint: {
      xs: { min: 0, max: 575 },
      sm: { min: 576, max: 767 },
      md: { min: 768, max: 991 },
      lg: { min: 992, max: 1199 },
      xl: { min: 1200, max: null },
    },
  },
  component: {
    heading: {
      skin: {
        100: css`
          color: ${({ theme }) => theme.global.color.primary};
          font-size: 22px;
          font-family: sans-serif;
          font-weight: bold;
          ${media('md')} {
            font-size: 32px;
          }
        `,
        200: css`
          color: red;
          font-size: 16px;
          font-family: serif;
          ${media('md')} {
            font-size: 32px;
          }
        `,
      },
    },
  },
};
