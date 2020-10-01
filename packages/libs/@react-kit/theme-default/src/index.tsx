/* eslint-disable @typescript-eslint/no-shadow */
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Theme, css, media } from '@react-kit/styling';

export const theme: Theme = {
  // export const theme = {
  global: {
    color: {
      primary: '#4f8495',
      secondary: '#5fa990',
      black: '#000',
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
      16: '16px',
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
    button: {
      skin: {
        primary: css<any>`
          border: 0;
          border-radius: 5px;
          padding: 3px 10px;

          ${({ theme }) => theme.global.font.trebuchetNormal};
          font-size: ${({ theme }) => theme.global.fontSize['16']};
          line-height: ${({ theme }) => theme.global.lineHeight['1.5']};
          color: ${({ theme }) => theme.global.color.black};
          background-color: #ccc;
          ${({ isHovered }) => isHovered && 'background-color: yellow'};
          ${({ isActive }) => isActive && 'background-color: green'};
          ${({ isDisabled }) => isDisabled && 'background-color: red'};
          ${({ isFocus }) => isFocus && 'border: 1px solid blue'};
        `,
      },
    },
    link: {
      skin: {
        primary: css<any>`
          ${({ theme }) => theme.global.font.trebuchetNormal};
          font-size: ${({ theme }) => theme.global.fontSize['16']};
          line-height: ${({ theme }) => theme.global.lineHeight['1.5']};
          color: ${({ theme }) => theme.global.color.black};

          text-decoration: underline;

          &:hover {
            cursor: pointer;
          }

          &:focus {
            outline: none;
          }

          ${({ isHovered }) => isHovered && 'color: #999'};
          ${({ isFocus }) => isFocus && 'border: 1px solid blue'};
        `,
      },
    },
  },
};
