import { css } from '@nx-kit/styling';

export const meter = {
  global: css<any>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
  
    .bar {
      position: relative;
      flex: 1 1 auto;
      height: 12px;
      border-radius: 6px;
      max-width: 420px;
      overflow: hidden;
      background-color: ${({ theme }) => theme.global.color.gray700};
    }

    .value {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform-origin: left;
      transition: transform 300ms cubic-bezier(0.13, 0.13, 0, 1),  background-color 300ms cubic-bezier(0.13, 0.13, 0, 1);

      [dir="rtl"] & {
        transform-origin: right;
      }
    }

    .label {
      margin-inline-end: 20px;
    }

    .valueLabel {
      margin-inline-start: 20px;
    }
  `,
  skin: {
    rectangular: css<any>`
      .bar {
        border-radius: 0;
        height: 24px;
        border: 2px solid ${({ theme }) => theme.global.color.gray100};
      }
    `,
  },
};
