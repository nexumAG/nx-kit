import React from 'react';
import { useTextField } from '@react-aria/textfield';
import { SlotProvider } from '@nx-kit/slot';
import { TextFieldContainerProps } from './TextFieldContainer.types';

export const TextFieldContainer = ({ children }: TextFieldContainerProps) => {
  const ref = React.useRef(null);
  const { labelProps, inputProps } = useTextField({ label: ' ' }, ref);

  const slots = {
    label: labelProps,
    textfield: { ...inputProps, ref },
  };

  return <SlotProvider slots={slots}>{children}</SlotProvider>;
};
