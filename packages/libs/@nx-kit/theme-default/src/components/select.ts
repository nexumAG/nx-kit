import { css } from '@nx-kit/styling';

export const select = {
  global: css<any>`
    position: relative;

    button {
      // reset
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      overflow: visible;
      margin: 0;
      border: none;
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
    }
  `,
  skin: {
    default: css<any>`
      display: inline-flex;
      flex-direction: column;

      button {
        border: 1px solid ${({ theme }) => theme.global.color.gray500};
        border-radius: 16px;
        padding: 8px 32px 8px 16px;
        background-color: ${({ theme }) => theme.global.color.white};
        color: ${({ theme }) => theme.global.color.gray100};
        justify-content: space-between;

        &:focus {
          outline: none;
        }

        ${({ isHovered }) =>
          isHovered &&
          css`
            border: 1px solid ${({ theme }) => theme.global.color.focus};
          `};

        ${({ isFocused, hasError }) =>
          isFocused &&
          !hasError &&
          css`
            border: 1px solid ${({ theme }) => theme.global.color.focus};
            box-shadow: 0px 0px 0px 1px ${({ theme }) => theme.global.color.focus};
          `};

        ${({ isFocused, hasError }) =>
          isFocused &&
          hasError &&
          css`
            border: 1px solid ${({ theme }) => theme.global.color.brandDanger500};
            box-shadow: 0px 0px 0px 1px ${({ theme }) => theme.global.color.brandDanger500};
          `};

        ${({ isDisabled }) =>
          isDisabled &&
          css`
            background-color: ${({ theme }) => theme.global.color.gray700};
          `};

        ${({ hasError }) =>
          hasError &&
          css`
            border: 1px solid ${({ theme }) => theme.global.color.brandDanger500};
          `};
      }

      button::before {
        position: absolute;
        right: 14px;
        content: '▼';
        color: ${({ theme }) => theme.global.color.gray300};
      }

      .popover {
        position: absolute;
        z-index: 10000;
        padding: 16px;
        margin-top: 8px;
        box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.08), 0px 4px 48px rgba(0, 0, 0, 0.08);
        border-radius: 16px;
        background-color: ${({ theme }) => theme.global.color.white};
        width: 100%;
        top: 100%;
      }

      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        max-height: 300px;
        overflow: auto;
      }

      ul:focus-visible {
        outline: none;
      }

      li {
        position: relative;
        padding: 16px;
        outline: none;
        cursor: pointer;
        border-radius: 16px;
      }

      li.isFocused {
        background-color: ${({ theme }) => theme.global.color.gray700};
      }

      li.isSelected {
        background-color: ${({ theme }) => theme.global.color.primary600};
        color: ${({ theme }) => theme.global.color.white};
      }

      li.isSelected::after {
        position: absolute;
        right: 14px;
        content: '✓';
        color: ${({ theme }) => theme.global.color.white};
      }
    `,
  },
};
