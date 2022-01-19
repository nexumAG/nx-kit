import { css } from '@nx-kit/styling';

export const select = {
  skin: {
    default: css<any>`
      position: relative;

      & div[role='dialog'] {
        width: 100%;
        border: 1px solid gray;
        background: lightgray;
        margin-top: 4px;
      }
    `,
  },
};
