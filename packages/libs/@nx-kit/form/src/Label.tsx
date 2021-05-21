import React from 'react';
import { Text, TextProps } from '@nx-kit/text';

export type LabelProps = {
  className?: string;
  styles?: TextProps['styles'];
  children: React.ReactNode;
};

export const Label = ({ className, styles, children }: LabelProps) => (
  <Text className={className} styles={styles} slot="label" elementType="label">
    {children}
  </Text>
);
