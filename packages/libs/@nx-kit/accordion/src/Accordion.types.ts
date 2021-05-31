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
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
};

export type AccordionItemProps = {
  id?: string;
  className?: string;
  title: React.ReactNode | ((isOpen: boolean, isDisabled?: boolean) => React.ReactNode);
  children: React.ReactNode;
  isOpen?: boolean;
  noControl?: boolean;
  onPress?: (args: {
    id: string;
    buttonElement: HTMLButtonElement | null;
    isOpen: boolean;
  }) => void;
};

export type AccordionItemStyledProps = {
  skin?: AccordionSkin;
  isFocused: boolean;
  isHovered: boolean;
  isDisabled: boolean;
};

export type AccordionContextProps = {
  skin?: AccordionSkin;
  expandedItems: Set<string>;
  onChange: (id: string, isOpen: boolean) => void;
  allowZeroExpanded: boolean;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
};
