import React from 'react';
import { Checkbox } from '../src';

export default {
  title: '@nx-kit/checkbox',
  component: Checkbox,
};

export const Default = () => <Checkbox onChange={console.log} ariaLabel="test" />;

export const Disabled = () => <Checkbox isDisabled ariaLabel="test" />;

export const Checked = () => <Checkbox ariaLabel="test" defaultValue />;

export const Error = () => <Checkbox ariaLabel="test" hasError />;

export const Readonly = () => <Checkbox ariaLabel="test" defaultValue isReadOnly />;

export const Indeterminate = () => <Checkbox ariaLabel="test" defaultValue isIndeterminate />;

export const CustomRender = () => (
  <Checkbox
    ariaLabel="test"
    render={({ isSelected, isFocused, setSelected }) => (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div onClick={() => setSelected(!isSelected)}>
        <svg width={24} height={24} aria-hidden="true" style={{ marginRight: 4 }}>
          <rect
            x={isSelected ? 4 : 5}
            y={isSelected ? 4 : 5}
            width={isSelected ? 16 : 14}
            height={isSelected ? 16 : 14}
            fill={isSelected ? 'orange' : 'none'}
            stroke={isSelected ? 'none' : 'gray'}
            strokeWidth={2}
          />
          {isSelected && (
            <path
              transform="translate(7 7)"
              d={`M3.788 9A.999.999 0 0 1 3 8.615l-2.288-3a1 1 0 1 1
            1.576-1.23l1.5 1.991 3.924-4.991a1 1 0 1 1 1.576 1.23l-4.712
            6A.999.999 0 0 1 3.788 9z`}
            />
          )}
          {isFocused && (
            <rect x={1} y={1} width={22} height={22} fill="none" stroke="orange" strokeWidth={2} />
          )}
        </svg>
      </div>
    )}
  />
);
