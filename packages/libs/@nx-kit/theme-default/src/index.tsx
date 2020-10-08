/* eslint-disable @typescript-eslint/no-shadow */
import { Theme, css, media } from '@nx-kit/styling';

export const theme: Theme = {
  global: {
    styles: css`
      body {
        font-size: ${({ theme }) => theme?.global?.fontSize?.['16']};
        ${({ theme }) => theme?.global?.font?.trebuchetNormal};
        color: ${({ theme }) => theme?.global?.color?.gray700};
      }
    `,
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
      gray50: '#f4f4f4',
      gray100: '#efefef',
      gray200: '#e8e8e8',
      gray300: '#e1e1e1',
      gray400: '#e7e7e7',
      gray500: '#dcdada',
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
      14: '14px',
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
    underlay: css<any>`
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.5);

      transition: opacity 350ms ease-in-out;
      opacity: ${({ state }) => (state === 'entering' || state === 'entered' ? 1 : 0)};
    `,
    overlayWrapper: css<any>`
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      align-items: ${({ alignItems }) => alignItems};
      justify-content: ${({ justifyContent }) => justifyContent};
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
    text: {
      skin: {
        300: css`
          font-size: ${({ theme }) => theme.global.fontSize['14']};
          margin-bottom: 14px;
        `,
        400: css`
          font-size: ${({ theme }) => theme.global.fontSize['16']};
          margin-bottom: 16px;
        `,
        500: css`
          font-size: ${({ theme }) => theme.global.fontSize['18']};
          margin-bottom: 18px;
        `,
        600: css`
          font-size: ${({ theme }) => theme.global.fontSize['18']};
          margin-bottom: 18px;
          ${media('lg')} {
            font-size: ${({ theme }) => theme.global.fontSize['22']};
            margin-bottom: 22px;
          }
        `,
        700: css`
          font-size: ${({ theme }) => theme.global.fontSize['22']};
          margin-bottom: 22px;
          ${media('lg')} {
            font-size: ${({ theme }) => theme.global.fontSize['26']};
            margin-bottom: 26px;
          }
        `,
      },
    },
    button: {
      global: css<any>`
        // reset
        position: relative;
        display: inline-flex;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        overflow: visible;
        margin: 0;
        border-style: solid;
        text-transform: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-appearance: button;
        vertical-align: top;
        text-decoration: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: none;
        isolation: isolate;

        &:hover,
        &:active {
          box-shadow: none;
        }

        &:disabled {
          cursor: default;
        }

        &:focus {
          outline: none;
        }

        &::-moz-focus-inner {
          border: 0;
          border-style: none;
          padding: 0;
          margin-block-start: -2px;
          margin-block-end: -2px;
        }
      `,
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
          ${({ isFocused, theme }) => isFocused && theme.global.focusRing};
        `,
        secondary: css<any>`
          color: ${({ theme }) => theme.global.color.black500};
          background-color: ${({ theme }) => theme.global.color.white500};
          padding: 12px 30px;
          margin: 10px;
          border: 2px solid ${({ theme }) => theme.global.color.black500};

          ${({ isHovered }) =>
            isHovered &&
            css`
              color: ${({ theme }) => theme.global.color.tertiary500};
              background-color: ${({ theme }) => theme.global.color.white500};
              border: 2px solid ${({ theme }) => theme.global.color.tertiary500};
            `};
          ${({ isActive }) =>
            isActive &&
            css`
              color: ${({ theme }) => theme.global.color.tertiary500};
              background-color: ${({ theme }) => theme.global.color.white500};
              border: 2px solid ${({ theme }) => theme.global.color.tertiary500};
            `};
          ${({ isDisabled }) =>
            isDisabled &&
            css`
              color: #b7b7b7;
              background-color: ${({ theme }) => theme.global.color.white500};
              border: 2px solid #b7b7b7;
            `};
          ${({ isFocused, theme }) => isFocused && theme.global.focusRing};
        `,
      },
    },
    link: {
      global: css<any>`
        &:focus {
          outline: none;
        }
      `,
      skin: {
        primary: css<any>`
          position: relative;
          ${({ theme }) => theme.global.font.trebuchetNormal};
          font-size: ${({ theme }) => theme.global.fontSize['16']};
          line-height: ${({ theme }) => theme.global.lineHeight['1.5']};
          color: ${({ theme }) => theme.global.color.gray700};

          text-decoration: underline;

          &:hover {
            cursor: pointer;
          }

          ${({ isHovered }) => isHovered && 'color: #999'};
          ${({ isFocused, theme }) => isFocused && theme.global.focusRing};
        `,
      },
    },
    divider: {
      global: css<any>`
        overflow: visible;
        border: none;
        margin: 0px;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        align-self: stretch;
        background-color: ${({ theme }) => theme.global.color.gray600};
        display: inline-block;
      `,
      skin: {
        100: css<any>`
          width: ${({ orientation }) => (orientation === 'vertical' ? '1px' : '100%')};
          height: ${({ orientation }) => (orientation === 'vertical' ? '20px' : '1px')};
          margin: ${({ orientation }) => (orientation === 'vertical' ? '0 5px' : '5px 0')};
        `,
      },
    },
    overlay: {
      global: css<any>`
        &:focus {
          outline: none;
        }
        position: relative;
      `,
      skin: {
        default: css<any>`
          background: white;
          padding: 30px;
          margin: 30px;
          border-radius: 5px;
          ${({ isFocused, theme }) => isFocused && theme.global.focusRing};

          transition: opacity 350ms ease-in-out;
          opacity: 0;
          opacity: ${({ state }) => state === 'entered' && 1};
          opacity: ${({ state }) => state === 'exiting' && 0};

          transition: transform 0.5s;
          transform: translateY(20px);
          ${({ state }) => state === 'entered' && `transform: translateY(0)`};
        `,
        fullscreen: css<any>`
          background: white;
          padding: 30px;
          width: 100vw;
          height: 100vh;
          ${({ isFocused, theme }) => isFocused && theme.global.focusRing};
        `,
      },
    },
    textfield: {
      global: css<any>`
        position: relative;
        border: 1px solid ${({ theme }) => theme.global.color.gray500};
        border-radius: 2px;
        padding: 4px;
        color: ${({ theme }) => theme.global.color.gray700};

        &:focus {
          outline: none;
          border: 1px solid ${({ theme }) => theme.global.color.focus};
        }

        ${({ isFocused, hasError }) =>
          isFocused &&
          !hasError &&
          css`
            box-shadow: 0px 0px 0px 1px ${({ theme }) => theme.global.color.focus};
          `};

        ${({ isFocused, hasError }) =>
          isFocused &&
          hasError &&
          css`
            box-shadow: 0px 0px 0px 1px ${({ theme }) => theme.global.color.brandDanger500};
          `};

        ${({ isDisabled }) =>
          isDisabled &&
          css`
            background-color: ${({ theme }) => theme.global.color.gray50};
          `};

        ${({ hasError }) =>
          hasError &&
          css`
            &&& {
              border: 1px solid ${({ theme }) => theme.global.color.brandDanger500};
            }
          `};
      `,
      skin: {},
    },
  },
};
