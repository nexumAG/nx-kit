import { css } from '@nx-kit/styling';

export const checkbox = {
  global: css<any>`
    &::-ms-check {
      display: none;
    }

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: relative;
    height: 16px;
    width: 16px;
    margin: 0;
    border: 1px solid ${({ theme }) => theme.global.color.gray500};
    border-radius: 2px;
    color: ${({ theme }) => theme.global.color.gray100};

    &:focus {
      outline: none;
    }

    &[aria-checked='true']::before {
      content: '✓';
      position: absolute;
      top: -4px;
      left: 2px;
    }

    &[aria-checked='mixed']::before {
      content: '—';
      position: absolute;
      top: -5px;
      left: 1px;
    }

    ${({ isFocused, hasError }) =>
      isFocused &&
      !hasError &&
      css`
        box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.global.color.focus};
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
        background-color: ${({ theme }) => theme.global.color.gray600};
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
};
