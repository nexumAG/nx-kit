import { css } from '@nx-kit/styling';

export const tabs = {
  global: ``,
  skin: {
    default: css<any>`
      display: flex;
      flex-direction: ${({ orientation }) => (orientation === 'horizontal' ? 'column' : 'row')};

      & > div[role='tablist'] {
        display: flex;
        ${({ theme, orientation }) =>
          orientation === 'horizontal'
            ? `border-bottom: 1px solid ${theme.global.color.gray600};`
            : `border-left: 1px solid ${theme.global.color.gray600};`};

        flex-direction: ${({ orientation }) => (orientation === 'horizontal' ? 'row' : 'column')};

        & > div[role='tab'] {
          padding: 10px;
          cursor: default;
          outline: inherit;
          position: relative;
          color: ${({ theme }) => theme.global.color.gray100};
        }

        & > div[role='tab'][aria-selected='true'] {
          color: ${({ theme }) => theme.global.color.primary500};
        }

        & > div[role='tab'][aria-selected='true']::before {
          content: '';
          position: absolute;
          background-color: ${({ theme }) => theme.global.color.primary500};
          ${({ orientation }) =>
            orientation === 'horizontal'
              ? `height: 3px; bottom: 0; left: 0; width: 100%;`
              : `width: 3px; left: 0; top: 0; height: 100%;`};
        }

        & > div[role='tab'][aria-disabled='true'] {
          opacity: 0.5;
        }

        & > div[role='tab'][data-is-focused='true'] {
          ${({ theme }) => theme.global.focusRing}
        }
      }

      & > div[role='tabpanel'] {
        ${({ orientation }) =>
          orientation === 'horizontal' ? `padding: 10px;` : `padding: 0px 10px;`};
        outline: inherit;
        position: relative;
      }

      & > div[role='tabpanel'][data-is-focused='true'] {
        ${({ theme }) => theme.global.focusRing}
      }
    `,
  },
};
