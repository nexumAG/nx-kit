import React from 'react';
import { Theme } from '@nx-kit/styling';

type AccordionSkin = keyof Theme['component']['accordion']['skin'];

export type AccordionProps = {
  skin?: AccordionSkin;
  children: React.ReactNode;
  allowMultipleExpanded?: boolean;
  allowZeroExpanded?: boolean;
  expandedItems?: string[];
  onChange?: (expandedItems: string[]) => void;
};

export type AccordionItemProps = {
  id?: string;
  className?: string;
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  noControl?: boolean;
};

export type AccordionItemStyledProps = {
  skin?: AccordionSkin;
  isFocused: boolean;
};

export type AccordionContextProps = {
  skin?: AccordionSkin;
  expandedItems: Set<string>;
  onChange: (id: string, isOpen: boolean) => void;
  allowZeroExpanded: boolean;
};
