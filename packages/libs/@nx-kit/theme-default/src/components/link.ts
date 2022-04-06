import { css } from '@nx-kit/styling';

export const link = {
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
      color: ${({ theme }) => theme.global.color.gray100};

      text-decoration: underline;

      &:hover {
        cursor: pointer;
      }

      ${({ isHovered, theme }) => isHovered && `color: ${theme.global.color.gray300}`};
      ${({ isPressed, theme }) => isPressed && `color: ${theme.global.color.gray500}`};
      ${({ isFocused, theme }) => isFocused && theme.global.focusRing};
    `,
  },
};
