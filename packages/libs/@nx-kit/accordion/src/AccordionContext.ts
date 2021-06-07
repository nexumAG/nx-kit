import React from 'react';
import { AccordionContextProps } from './Accordion.types';

export const AccordionContext = React.createContext<AccordionContextProps>({
  expandedItems: new Set([]),
  onChange: () => {},
  allowZeroExpanded: false,
});
