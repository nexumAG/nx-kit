import { css } from '@nx-kit/styling';

export const table = {
  global: css<any>`
    border-collapse: collapse;
  `,
  skin: {
    default: css<any>`
      width: 100%;

      .isFocused {
        ${({ theme }) => theme.global.focusRing}
      }

      thead {
        background: #f9f9f9;
        border-radius: 16px;

        tr {
          th {
            text-align: left;
            padding: 12px;
            font-weight: normal;
            font-size: 14px;
            line-height: 116%;

            color: #77757f;
            margin: 0;
            flex: none;

            &.colspan {
              text-align: center;
            }
          }
        }
      }

      tbody {
        tr {
          &.isSelected {
            color: white;
            background: blueviolet;
            &.isPressed {
              background: mediumpurple;
              &.odd {
                background: navajowhite;
              }
            }
          }

          td {
            padding: 12px;
          }
        }
      }
    `,
  },
};
