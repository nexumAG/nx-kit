import React from 'react';
import { useLabel } from '@react-aria/label';
import { SlotProvider } from '@nx-kit/slot';

export type LabelWrapperProps = {
  children: React.ReactNode;
};

export const LabelWrapper = ({ children }: LabelWrapperProps) => {
  const { labelProps, fieldProps } = useLabel({ label: ' ' });

  const slots = {
    label: labelProps,
    field: fieldProps,
  };

  return <SlotProvider slots={slots}>{children}</SlotProvider>;
};
