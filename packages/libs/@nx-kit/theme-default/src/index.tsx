/* eslint-disable @typescript-eslint/no-shadow */
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Theme, css, media } from '@nx-kit/styling';

export const globalCSS = css`
  body {
    color: ${({ theme }) => theme?.global?.color?.gray700};
  }
`;

export const theme: Theme = {
  // export const theme = {
  global: {
    color: {
      primary500: '#6880A5',
      primary600: '#4176C7',
      primary700: '#1E4279',
      primary800: '#002967',
      secondary700: '#DD8DBC',
      secondary800: '#C74190',
      tertiary500: '#009948',
      background: '#fff',
      white500: '#ffffff',
      black500: '#000000',
      gray100: '#efefef',
      gray200: '#e8e8e8',
      gray300: '#e1e1e1',
      gray400: '#e7e7e7',
      gray500: '#dcdada',
      gray50: '#f4f4f4',
      gray600: '#6b6b6b',
      gray700: '#444444',
      brandDanger500: '#B90739',
      brandSuccess500: '#1CA642',
      focus: '#1CA642',
    },
    breakpoint: {
      xs: { min: 0, max: 575.98 },
      sm: { min: 576, max: 767.98 },
      md: { min: 768, max: 991.98 },
      lg: { min: 992, max: 1199.98 },
      xl: { min: 1200, max: 1599.98 },
      xxl: { min: 1600, max: 1919.98 },
      xxxl: { min: 1920, max: null },
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
      18: '18px',
      22: '22px',
      24: '24px',
      26: '26px',
      34: '34px',
      42: '42px',
      48: '48px',
      50: '50px',
      58: '58px',
      72: '72px',
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
    focusRing: css`
      &:after {
        position: absolute;
        content: '';
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        display: block;
        box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.global.color.focus};
        margin: -5px;
      }
    `,
  },
  component: {
    heading: {
      skin: {
        400: css`
          ${({ theme }) => theme.global.font.trebuchetBold};
          font-size: ${({ theme }) => theme.global.fontSize['18']};
          line-height: ${({ theme }) => theme.global.lineHeight['1.5']};
          // margin-top: 53px;
          margin-bottom: 18px;
          ${media('xl')} {
            font-size: ${({ theme }) => theme.global.fontSize['24']};
          }
        `,
        500: css`
          ${({ theme }) => theme.global.font.trebuchetBold};
          font-size: ${({ theme }) => theme.global.fontSize['22']};
          line-height: ${({ theme }) => theme.global.lineHeight['1.5']};
          // margin-top: 53px;
          margin-bottom: 18px;
          ${media('lg')} {
            font-size: ${({ theme }) => theme.global.fontSize['34']};
          }
          ${media('xl')} {
            font-size: ${({ theme }) => theme.global.fontSize['42']};
          }
        `,
        600: css`
          ${({ theme }) => theme.global.font.trebuchetBold};
          font-size: ${({ theme }) => theme.global.fontSize['26']};
          line-height: ${({ theme }) => theme.global.lineHeight['1.5']};
          // margin-top: 35px;
          margin-bottom: 20px;
          ${media('md')} {
            font-size: ${({ theme }) => theme.global.fontSize['34']};
          }
          ${media('lg')} {
            font-size: ${({ theme }) => theme.global.fontSize['42']};
          }
          ${media('xl')} {
            font-size: ${({ theme }) => theme.global.fontSize['48']};
          }
        `,
        700: css`
          ${({ theme }) => theme.global.font.trebuchetBold};
          font-size: ${({ theme }) => theme.global.fontSize['34']};
          line-height: ${({ theme }) => theme.global.lineHeight['1.5']};
          margin-bottom: 15px;
          ${media('md')} {
            font-size: ${({ theme }) => theme.global.fontSize['50']};
            margin-bottom: 20px;
          }
          ${media('lg')} {
            font-size: ${({ theme }) => theme.global.fontSize['58']};
          }
          ${media('xl')} {
            font-size: ${({ theme }) => theme.global.fontSize['72']};
          }
        `,
      },
    },
    button: {
      skin: {
        primary: css<any>`
          color: ${({ theme }) => theme.global.color.white500};
          background-color: ${({ theme }) => theme.global.color.black500};
          padding: 10px 30px;
          margin: 10px;
          border: 4px solid ${({ theme }) => theme.global.color.black500};

          ${({ isHovered }) =>
            isHovered &&
            css`
              color: ${({ theme }) => theme.global.color.white500};
              background-color: ${({ theme }) => theme.global.color.tertiary500};
              border: 4px solid ${({ theme }) => theme.global.color.tertiary500};
            `};
          ${({ isActive }) =>
            isActive &&
            css`
              color: ${({ theme }) => theme.global.color.white500};
              background-color: rgba(0, 153, 72, 0.7);
              border: 4px solid ${({ theme }) => theme.global.color.tertiary500};
            `};
          ${({ isDisabled }) =>
            isDisabled &&
            css`
              color: #b7b7b7;
              background-color: ${({ theme }) => theme.global.color.gray50};
              border: 4px solid ${({ theme }) => theme.global.color.gray50};
            `};
          ${({ isFocus }) => isFocus && theme.global.focusRing};
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
