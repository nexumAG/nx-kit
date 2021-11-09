import { css } from '@nx-kit/styling';

export const textfield = {
  global: css<any>`
    position: relative;
    border: 1px solid ${({ theme }) => theme.global.color.gray500};
    border-radius: 16px;
    padding: 8px 16px;
    color: ${({ theme }) => theme.global.color.gray100};

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
        background-color: ${({ theme }) => theme.global.color.gray700};
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
