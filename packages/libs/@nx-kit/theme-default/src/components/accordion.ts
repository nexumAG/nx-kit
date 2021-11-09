import { css } from '@nx-kit/styling';

export const accordion = {
  skin: {
    default: css<any>`
      margin-bottom: 16px;

      & > div[role='heading'] {
        ${({ theme }) => theme?.component?.heading?.skin?.['400']};
        margin-bottom: 0;
      }

      & > div[role='heading'] > button {
        display: block;
        width: 100%;
        text-align: inherit;
        background-color: ${({ theme }) => theme.global.color.gray700};
        color: ${({ isHovered, theme }) =>
          isHovered ? theme.global.color.primary500 : theme.global.color.gray100};
        border: none;
        padding: 16px;
        padding-left: 44px;
        border-radius: 16px;
        font: inherit;
        cursor: pointer;
        outline: inherit;
        position: relative;
        ${({ isFocused, theme }) => isFocused && theme.global.focusRing};
      }

      & > div[role='heading'] > button[aria-expanded='true'] {
        border-radius: 16px 16px 0 0;
      }

      & > div[role='heading'] > button[aria-disabled='true'] {
        cursor: default;
      }

      & > div[role='heading'] > button::before {
        content: '⯈';
        will-change: transform;
        transition: transform 300ms ease;
        position: absolute;
        transform-origin: center;
        left: 16px;
        font-size: 80%;
        top: 33%;
      }

      & > div[role='heading'] > button[aria-expanded='true']::before {
        transform: rotate(90deg);
      }

      & > div[role='region'] {
        background-color: ${({ theme }) => theme.global.color.gray700};
        border-top: 2px dashed ${({ theme }) => theme.global.color.gray600};
        padding: 16px;
        border-radius: 0px 0px 16px 16px;
        animation: open 0.3s ease-in-out;
      }

      & > div[role='region'][hidden] {
        display: none;
      }

      @keyframes open {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    `,
  },
};
