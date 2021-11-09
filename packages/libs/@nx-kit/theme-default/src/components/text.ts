import { css, media } from '@nx-kit/styling';

export const text = {
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
    600: css<any>`
      font-size: ${({ theme }) => theme.global.fontSize['18']};
      margin-bottom: 18px;
      ${media('lg')} {
        font-size: ${({ theme }) => theme.global.fontSize['22']};
        margin-bottom: 22px;
      }
    `,
    700: css<any>`
      font-size: ${({ theme }) => theme.global.fontSize['22']};
      margin-bottom: 22px;
      ${media('lg')} {
        font-size: ${({ theme }) => theme.global.fontSize['26']};
        margin-bottom: 26px;
      }
    `,
  },
};
