import { css, media } from '@nx-kit/styling';

export const heading = {
  skin: {
    400: css<any>`
      ${({ theme }) => theme.global.font.trebuchetBold};
      font-size: ${({ theme }) => theme.global.fontSize['18']};
      line-height: ${({ theme }) => theme.global.lineHeight['1.5']};
      // margin-top: 53px;
      margin-bottom: 18px;
      ${media('xl')} {
        font-size: ${({ theme }) => theme.global.fontSize['24']};
      }
    `,
    500: css<any>`
      ${({ theme }) => theme.global.font.trebuchetBold};
      font-size: ${({ theme }) => theme.global.fontSize['22']};
      line-height: ${({ theme }) => theme.global.lineHeight['1.5']};
      // margin-top: 53px;
      margin-bottom: 18px;
      ${media('lg')} {
        font-size: ${({ theme }) => theme.global.fontSize['34']};
      }
      ${media('xl')} {
        font-size: ${({ theme }) => theme.global.fontSize['42']};
      }
    `,
    600: css<any>`
      ${({ theme }) => theme.global.font.trebuchetBold};
      font-size: ${({ theme }) => theme.global.fontSize['26']};
      line-height: ${({ theme }) => theme.global.lineHeight['1.5']};
      // margin-top: 35px;
      margin-bottom: 20px;
      ${media('md')} {
        font-size: ${({ theme }) => theme.global.fontSize['34']};
      }
      ${media('lg')} {
        font-size: ${({ theme }) => theme.global.fontSize['42']};
      }
      ${media('xl')} {
        font-size: ${({ theme }) => theme.global.fontSize['48']};
      }
    `,
    700: css<any>`
      ${({ theme }) => theme.global.font.trebuchetBold};
      font-size: ${({ theme }) => theme.global.fontSize['34']};
      line-height: ${({ theme }) => theme.global.lineHeight['1.5']};
      margin-bottom: 15px;
      ${media('md')} {
        font-size: ${({ theme }) => theme.global.fontSize['50']};
        margin-bottom: 20px;
      }
      ${media('lg')} {
        font-size: ${({ theme }) => theme.global.fontSize['58']};
      }
      ${media('xl')} {
        font-size: ${({ theme }) => theme.global.fontSize['72']};
      }
    `,
  },
};
