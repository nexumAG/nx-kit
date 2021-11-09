import { css } from '@nx-kit/styling';

export const divider = {
  global: css<any>`
    overflow: visible;
    border: none;
    margin: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    align-self: stretch;
    background-color: ${({ theme }) => theme.global.color.gray600};
    display: inline-block;
  `,
  skin: {
    100: css<any>`
      width: ${({ orientation }) => (orientation === 'vertical' ? '1px' : '100%')};
      height: ${({ orientation }) => (orientation === 'vertical' ? '20px' : '1px')};
      margin: ${({ orientation }) => (orientation === 'vertical' ? '0 5px' : '5px 0')};
    `,
  },
};
