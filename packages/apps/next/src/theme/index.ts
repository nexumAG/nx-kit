import { Theme, css, media } from '@nx-kit/styling';

export const theme = {
  global: {
    color: {
      white: '#fff',
      black: '#000',
    },
    breakpoint: {
      xs: { min: 0, max: 575.9 },
      sm: { min: 576, max: 767.9 },
      md: { min: 768, max: 991.9 },
      lg: { min: 992, max: 1199.9 },
      xl: { min: 1200, max: 1439.9 },
      xxl: { min: 1440, max: 1679.9 },
      full: { min: 1680, max: null },
    },
    spacing: {
      5: '5px',
      10: '10px',
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
  },
  component: {
    heading: {
      skin: {
        400: `
          font-size: 32px;
          color: red;
        `,
      },
    },
  },
};
