import React from 'react';
import { useTextField } from '@react-aria/textfield';
import { SlotProvider } from '@nx-kit/slot';
import { TextFieldWrapperProps } from './TextFieldWrapper.types';

export const TextFieldWrapper = ({ children }: TextFieldWrapperProps) => {
  // why need ref?
  const ref = React.useRef(null);
  const { labelProps, inputProps } = useTextField({ label: ' ' }, ref);

  const slots = {
    label: labelProps,
    field: inputProps,
  };

  return <SlotProvider slots={slots}>{children}</SlotProvider>;
};
