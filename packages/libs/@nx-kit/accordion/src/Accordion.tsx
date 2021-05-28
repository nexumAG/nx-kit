import React, { useContext, useEffect, useState } from 'react';
import { useId } from '@react-aria/utils';
import { styled } from '@nx-kit/styling';
import {
  AccordionProps,
  AccordionItemProps,
  DetailsStyledProps,
  AccordionContextProps,
} from './Accordion.types';

const AccordionContext = React.createContext<AccordionContextProps>({
  expandedItems: new Set([]),
  onChange: () => {},
  allowZeroExpanded: false,
});

const DetailsStyled = styled.details<DetailsStyledProps>`
  ${({ theme }) => theme?.component?.accordion?.global};
  ${({ theme, skin }) => skin && theme?.component?.accordion?.skin?.[skin]};
`;

export const Accordion = ({
  children,
  skin,
  expandedItems: expandedItemsProp,
  onChange: onChangeProp,
  allowMultipleExpanded = false,
  allowZeroExpanded = false,
}: AccordionProps) => {
  const [expandedItems, setExpandedItems] = useState(new Set(expandedItemsProp ?? []));
  const onChange = (id: string, isOpen: boolean) => {
    if (isOpen) {
      if (allowMultipleExpanded) {
        setExpandedItems((prev) => new Set(prev).add(id));
      } else {
        setExpandedItems(new Set([id]));
      }
    } else {
      setExpandedItems((prev) => {
        const next = new Set(prev);
        if (next.size > 1 || allowZeroExpanded) {
          next.delete(id);
        }
        return next;
      });
    }
  };

  useEffect(() => {
    if (expandedItemsProp) {
      setExpandedItems(new Set(expandedItemsProp));
    }
  }, [expandedItemsProp]);

  useEffect(() => {
    if (onChangeProp) {
      onChangeProp(Array.from(expandedItems));
    }
  }, [Array.from(expandedItems).join('|')]);

  return (
    <AccordionContext.Provider value={{ skin, expandedItems, onChange, allowZeroExpanded }}>
      {children}
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({
  id: idProp,
  title,
  isOpen: isOpenProp = false,
  children,
  className,
  noControl = false,
}: AccordionItemProps) => {
  const id = useId(idProp);
  const { skin, expandedItems, onChange, allowZeroExpanded } = useContext(AccordionContext);
  const [isOpen, setIsOpen] = useState(isOpenProp);

  useEffect(() => {
    const isOpenContext = expandedItems.has(id);
    setIsOpen(isOpenContext);
  }, [expandedItems]);

  // TODO: remove if bug is fixed? https://github.com/facebook/react/issues/15486
  const onToggle = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (noControl) {
      return;
    }

    if (isOpen && !allowZeroExpanded && expandedItems.size < 2) {
      return;
    }

    setIsOpen(!isOpen);
  };

  return (
    <DetailsStyled
      open={isOpen}
      skin={skin}
      className={className}
      onClick={onToggle}
      onToggle={(e: React.SyntheticEvent<HTMLDetailsElement, Event>) =>
        onChange(id, e.currentTarget.open)
      }
    >
      <summary>{title}</summary>
      {children}
    </DetailsStyled>
  );
};

Accordion.Item = AccordionItem;
