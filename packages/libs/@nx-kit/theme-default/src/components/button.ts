import { css } from '@nx-kit/styling';

export const button = {
  global: css<any>`
    // reset
    position: relative;
    display: inline-flex;
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
      color: ${({ theme }) => theme.global.color.white};
      background-color: ${({ theme }) => theme.global.color.primary500};
      padding: 16px;
      border-radius: 16px;
      border: 0;

      ${({ isHovered }) =>
        isHovered &&
        css`
          background-color: ${({ theme }) => theme.global.color.primary600};
        `};
      ${({ isActive }) =>
        isActive &&
        css`
          background-color: ${({ theme }) => theme.global.color.primary500};
          border: 4px solid ${({ theme }) => theme.global.color.primary700};
          padding: 12px;
        `};
      ${({ isDisabled }) =>
        isDisabled &&
        css`
          background-color: ${({ theme }) => theme.global.color.primary800};
        `};
      ${({ isFocused, theme }) => isFocused && theme.global.focusRing};
    `,
    secondary: css<any>`
      color: ${({ theme }) => theme.global.color.primary500};
      background-color: ${({ theme }) => theme.global.color.gray700};
      padding: 16px;
      border-radius: 16px;
      border: 1px solid ${({ theme }) => theme.global.color.gray500};

      ${({ isHovered }) =>
        isHovered &&
        css`
          color: ${({ theme }) => theme.global.color.primary600};
          border: 1px solid ${({ theme }) => theme.global.color.primary600};
        `};
      ${({ isActive }) =>
        isActive &&
        css`
          color: ${({ theme }) => theme.global.color.primary500};
          border: 2px solid ${({ theme }) => theme.global.color.primary500};
          padding: 15px;
        `};
      ${({ isDisabled }) =>
        isDisabled &&
        css`
          color: ${({ theme }) => theme.global.color.primary700};
          border: 1px solid ${({ theme }) => theme.global.color.gray600};
        `};
      ${({ isFocused, theme }) => isFocused && theme.global.focusRing};
    `,
  },
};
