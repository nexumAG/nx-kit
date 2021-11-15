import { css } from '@nx-kit/styling';

export const overlay = {
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

      transition: opacity 350ms ease-in-out, transform 0.5s;
      opacity: 0;
      opacity: ${({ state }) => state === 'entered' && 1};
      opacity: ${({ state }) => state === 'exiting' && 0};

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
    popover: css<any>`
      background: white;
      padding: 30px;
      border-radius: 5px;
      border: 1px solid #eeeeee;
      box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.6);
      ${({ isFocused, theme }) => isFocused && theme.global.focusRing};

      transition: opacity 350ms ease-in-out, transform 0.5s;
      opacity: 0;
      opacity: ${({ state }) => state === 'entered' && 1};
      opacity: ${({ state }) => state === 'exiting' && 0};

      transform: translateY(20px);
      ${({ state }) => state === 'entered' && `transform: translateY(0)`};
    `,
  },
};
