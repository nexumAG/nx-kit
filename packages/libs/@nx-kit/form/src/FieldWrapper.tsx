import React from 'react';
import { useLabel } from '@react-aria/label';
import { useId } from '@react-aria/utils';
import { SlotProvider } from '@nx-kit/slot';

export type FieldWrapperProps = {
  children: React.ReactNode;
};

export const FieldWrapper = ({ children }: FieldWrapperProps) => {
  const { labelProps, fieldProps } = useLabel({ label: ' ' });
  const errorId = useId();

  const slots = {
    label: labelProps,
    field: { ...fieldProps, 'aria-describedby': errorId },
    error: { id: errorId },
  };

  return <SlotProvider slots={slots}>{children}</SlotProvider>;
};
