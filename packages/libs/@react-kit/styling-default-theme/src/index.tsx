// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Theme, css, media } from '@react-kit/styling';

export const defaultTheme: Theme = {
  // export const defaultTheme = {
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
    spacing: {
      5: '5px',
      10: '10px',
      20: '20px',
      40: '40px',
    },
    font: {
      trebuchetNormal: `
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
        font-weight: normal;
      `,
      trebuchetBold: `
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
        font-weight: bold;
      `,
      georgiaNormal: `
        font-family: Georgia, serif;
        font-weight: normal;
      `,
    },
    fontSize: {
      28: '28px',
      32: '32px',
      36: '36px',
      48: '48px',
    },
    lineHeight: {
      '1.5': 1.5,
    },
    zIndex: {
      1: 1,
      10: 10,
      50: 50,
      100: 100,
    },
  },
  component: {
    heading: {
      skin: {
        100: css`
          ${({ theme }) => theme.global.font.trebuchetBold};
          font-size: ${({ theme }) => theme.global.fontSize['32']};
          color: ${({ theme }) => theme.global.color.primary};
          ${media('md')} {
            font-size: ${({ theme }) => theme.global.fontSize['48']};
          }
        `,
        200: css`
          ${({ theme }) => theme.global.font.georgiaNormal};
          font-size: ${({ theme }) => theme.global.fontSize['28']};
          color: ${({ theme }) => theme.global.color.secondary};
          ${media('md')} {
            font-size: ${({ theme }) => theme.global.fontSize['36']};
          }
        `,
      },
    },
  },
};
