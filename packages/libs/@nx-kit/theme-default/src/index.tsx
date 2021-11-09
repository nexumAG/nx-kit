/* eslint-disable @typescript-eslint/no-shadow */
import { Theme, css } from '@nx-kit/styling';
import { heading } from './components/heading';
import { text } from './components/text';
import { button } from './components/button';
import { link } from './components/link';
import { divider } from './components/divider';
import { overlay } from './components/overlay';
import { textfield } from './components/textfield';
import { checkbox } from './components/checkbox';
import { accordion } from './components/accordion';
import { tabs } from './components/tabs';

export const theme: Theme = {
  global: {
    styles: css`
      body {
        font-size: ${({ theme }) => theme?.global?.fontSize?.['16']};
        ${({ theme }) => theme?.global?.font?.trebuchetNormal};
        color: ${({ theme }) => theme?.global?.color?.gray100};
      }
    `,
    color: {
      primary500: '#0030CC',
      primary600: '#3363FF',
      primary700: '#809EFF',
      primary800: '#B3C5FF',
      secondary500: '#C80068',
      secondary600: '#FA0082',
      secondary700: '#FB339B',
      secondary800: '#FC66B4',
      tertiary500: '#18BA92',
      tertiary600: '#1BD2A4',
      tertiary700: '#35EBBD',
      background: '#fff',
      white: '#ffffff',
      black: '#000000',
      gray100: '#0F0D15',
      gray200: '#34303E',
      gray300: '#615E69',
      gray400: '#8E8C94',
      gray500: '#BBBABF',
      gray600: '#E8E8EA',
      gray700: '#F9F9F9',
      brandDanger500: '#F42829',
      brandSuccess500: '#18BA92',
      focus: '#003CFF',
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
        border-radius: 16px;
        margin: -4px;
        z-index: 1;
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
    heading,
    text,
    button,
    link,
    divider,
    overlay,
    textfield,
    checkbox,
    accordion,
    tabs,
  },
};
