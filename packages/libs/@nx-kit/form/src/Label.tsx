import React from 'react';
import { Text, TextProps } from '@nx-kit/text';

export type LabelProps = {
  className?: string;
  styles?: TextProps['styles'];
  children: React.ReactNode;
  slot?: string;
};

export const Label = ({ className, styles, children, slot = 'label' }: LabelProps) => (
  <Text className={className} styles={styles} slot={slot} elementType="label">
    {children}
  </Text>
);
