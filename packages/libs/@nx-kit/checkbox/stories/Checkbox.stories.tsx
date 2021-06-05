import React, { SyntheticEvent, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Form } from '@nx-kit/form';
import { Checkbox } from '../src';

export default {
  title: '@nx-kit/checkbox',
  component: Checkbox,
};

export const Default = () => <Checkbox onChange={console.log} aria-label="test" />;

export const Disabled = () => <Checkbox isDisabled aria-label="test" />;

export const Checked = () => <Checkbox aria-label="test" defaultChecked />;

export const Error = () => <Checkbox aria-label="test" hasError />;

export const Readonly = () => <Checkbox aria-label="test" defaultChecked isReadOnly />;

export const Indeterminate = () => <Checkbox aria-label="test" defaultChecked isIndeterminate />;

export const CustomRender = () => (
  <Checkbox
    aria-label="test"
    render={({ isChecked, isFocused, setChecked }) => (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div onClick={() => setChecked(!isChecked)}>
        <svg width={24} height={24} aria-hidden="true" style={{ marginRight: 4 }}>
          <rect
            x={isChecked ? 4 : 5}
            y={isChecked ? 4 : 5}
            width={isChecked ? 16 : 14}
            height={isChecked ? 16 : 14}
            fill={isChecked ? 'orange' : 'none'}
            stroke={isChecked ? 'none' : 'gray'}
            strokeWidth={2}
          />
          {isChecked && (
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

export const FieldWrapper = () => (
  <Form.FieldWrapper>
    <Form.Label>Checkbox Label </Form.Label>
    <Checkbox />
  </Form.FieldWrapper>
);

export const Controlled = () => {
  const [checked, setChecked] = useState(true);

  return (
    <Checkbox
      aria-label="test"
      isChecked={checked}
      onChange={(event: SyntheticEvent<HTMLInputElement>) => {
        setChecked(event.currentTarget.checked);
        console.log(event.currentTarget.checked);
      }}
    />
  );
};
