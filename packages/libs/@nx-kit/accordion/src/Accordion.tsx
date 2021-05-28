import React, { useContext } from 'react';
import { styled } from '@nx-kit/styling';
import {
  AccordionProps,
  AccordionItemProps,
  DetailsStyledProps,
  AccordionContextProps,
} from './Accordion.types';

const AccordionContext = React.createContext<AccordionContextProps>({});

const DetailsStyled = styled.details<DetailsStyledProps>`
  ${({ theme }) => theme?.component?.accordion?.global};
  ${({ theme, skin }) => skin && theme?.component?.accordion?.skin?.[skin]};
`;

export const Accordion = ({ children, skin }: AccordionProps) => {
  return <AccordionContext.Provider value={{ skin }}>{children}</AccordionContext.Provider>;
};

const AccordionItem = ({ title, isOpen, children }: AccordionItemProps) => {
  const { skin } = useContext(AccordionContext);

  return (
    <DetailsStyled open={isOpen} skin={skin}>
      <summary>{title}</summary>
      {children}
    </DetailsStyled>
  );
};

Accordion.Item = AccordionItem;
