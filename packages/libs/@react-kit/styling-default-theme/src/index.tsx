import { Theme, css, media } from '@react-kit/styling';

export const defaultTheme: Theme = {
  global: {
    color: {
      primary: '#4f8495',
      secondary: '#5fa990',
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
          font-size: 32px;
          font-family: 'Trebuchet MS', Helvetica, sans-serif;
          font-weight: bold;
          ${media('md')} {
            font-size: 48px;
          }
        `,
        200: css`
          color: ${({ theme }) => theme.global.color.secondary};
          font-size: 28px;
          font-family: Georgia, serif;
          ${media('md')} {
            font-size: 36px;
          }
        `,
      },
    },
  },
};
