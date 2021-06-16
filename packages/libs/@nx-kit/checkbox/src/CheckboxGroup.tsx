import React, { ReactNode } from 'react';
import { SlotProvider, useSlotProps } from '@nx-kit/slot';

type CheckboxGroupProps = {
  name: string;
  children: ReactNode;
};

const CheckboxGroup = ({ children }: CheckboxGroupProps) => {
  const props = useSlotProps('field', {});

  // console.log('props', props);

  const slots = {
    label: {},
    field: {},
    error: {},
  };

  return (
    <SlotProvider slots={slots}>
      <div role="group" {...props}>
        {children}
      </div>
    </SlotProvider>
  );
};

export { CheckboxGroup };
