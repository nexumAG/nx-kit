import React from 'react';
import { Theme } from '@nx-kit/styling';

type AccordionSkin = keyof Theme['component']['accordion']['skin'];

export type AccordionProps = {
  className?: string;
  skin?: AccordionSkin;
  children: React.ReactNode;
};

export type AccordionItemProps = {
  className?: string;
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
};

export type DetailsStyledProps = {
  skin?: AccordionSkin;
};

export type AccordionContextProps = {
  skin?: AccordionSkin;
};
