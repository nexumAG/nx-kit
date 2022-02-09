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
        tr {
          th {
            background: #f9f9f9;
            text-align: left;
            height: 40px;
            padding: 16px 0;
            font-weight: normal;
            font-size: 14px;
            line-height: 1.2;

            color: #77757f;
            margin: 0;
            flex: none;

            position: relative;

            &:focus {
              outline: none;
            }

            &.isFocused {
              ${({ theme }) => theme.global.focusRing};
            }

            &.isSortable {
              cursor: pointer;
            }

            &:first-of-type {
              padding-left: 16px;
              border-top-left-radius: 16px;
              border-bottom-left-radius: 16px;
            }

            &:last-of-type {
              padding-right: 16px;
              border-top-right-radius: 16px;
              border-bottom-right-radius: 16px;
            }

            &.colspan {
              text-align: center;
            }

            span.visible {
              position: relative;
              &.ascending:after {
                position: absolute;
                content: '▲';
                margin-left: 5px;
              }
              &.descending:after {
                position: absolute;
                content: '▼';
                margin-left: 5px;
              }
            }
          }
        }
      }

      tbody {
        &:before {
          content: '@';
          display: block;
          line-height: 10px;
          text-indent: -99999px;
        }

        tr {
          height: 56px;
          border-radius: 16px;
          position: relative;

          &:focus {
            outline: none;
          }

          &.isFocused {
            ${({ theme }) => theme.global.focusRing};
          }

          &.isSelected {
            box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.08), 0px 4px 48px rgba(0, 0, 0, 0.08);
            &.isPressed {
              box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08), 0px 4px 48px rgba(0, 0, 0, 0.08);
            }
          }

          td {
            font-weight: normal;
            font-size: 14px;
            position: relative;

            &:focus {
              outline: none;
            }

            &.isFocused {
              ${({ theme }) => theme.global.focusRing};
            }

            &:first-of-type {
              padding-left: 16px;
              border-top-left-radius: 16px;
              border-bottom-left-radius: 16px;
            }

            &:last-of-type {
              padding-right: 16px;
              border-top-right-radius: 16px;
              border-bottom-right-radius: 16px;
            }
          }
        }
      }
    `,
  },
};
