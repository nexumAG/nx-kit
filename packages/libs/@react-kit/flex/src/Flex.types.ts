import { ReactNode } from 'react';
import { FlexContainer } from '@react-kit/styling';

export type FlexTag = 'div' | 'span' | 'p';

export type FlexProps = {
  className?: string;
  children: ReactNode;
  tag?: FlexTag;
} & FlexContainer;

export type FlexStyledProps = FlexContainer;
