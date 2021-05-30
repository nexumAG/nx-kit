import React, { useContext, useEffect, useState } from 'react';
import { useId, mergeProps } from '@react-aria/utils';
import { usePress } from '@react-aria/interactions';
import { useFocusRing } from '@react-aria/focus';
import { styled } from '@nx-kit/styling';
import {
  AccordionProps,
  AccordionItemProps,
  AccordionItemStyledProps,
  AccordionContextProps,
} from './Accordion.types';

const AccordionContext = React.createContext<AccordionContextProps>({
  expandedItems: new Set([]),
  onChange: () => {},
  allowZeroExpanded: false,
});

const AccordionItemStyled = styled.div<AccordionItemStyledProps>`
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
  const idRegion = useId();
  const { skin, expandedItems, onChange, allowZeroExpanded } = useContext(AccordionContext);
  const [isOpen, setIsOpen] = useState(isOpenProp);
  const { pressProps } = usePress({
    onPress: () => onToggle(),
  });
  const { focusProps, isFocusVisible } = useFocusRing();

  useEffect(() => {
    const isOpenContext = expandedItems.has(id);
    setIsOpen(isOpenContext);
  }, [expandedItems]);

  useEffect(() => {
    onChange(id, isOpen);
  }, [isOpen]);

  const onToggle = () => {
    if (noControl) {
      return;
    }

    if (isOpen && !allowZeroExpanded && expandedItems.size < 2) {
      return;
    }

    setIsOpen(!isOpen);
  };

  return (
    <AccordionItemStyled skin={skin} className={className} isFocused={isFocusVisible}>
      <h3>
        <button
          id={id}
          type="button"
          aria-controls={idRegion}
          aria-expanded={isOpen}
          aria-disabled={isOpen && !allowZeroExpanded && expandedItems.size < 2 ? true : undefined}
          {...mergeProps(pressProps, focusProps)}
        >
          {title}
        </button>
      </h3>
      <div id={idRegion} role="region" hidden={!isOpen} aria-labelledby={id}>
        {children}
      </div>
    </AccordionItemStyled>
  );
};

Accordion.Item = AccordionItem;
