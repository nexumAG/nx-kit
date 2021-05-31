import React, { useEffect, useState } from 'react';
import { useKeyboard } from '@react-aria/interactions';
import { AccordionContext } from './AccordionContext';
import { AccordionItem } from './AccordionItem';
import { AccordionProps } from './Accordion.types';

const getButtonIndex = (target: HTMLElement, items: HTMLButtonElement[]) => {
  return items.findIndex((item) => item === target);
};

const mod = (n: number, m: number) => {
  return ((n % m) + m) % m;
};

export const Accordion = ({
  children,
  skin,
  expandedItems: expandedItemsProp,
  onChange: onChangeProp,
  allowMultipleExpanded = false,
  allowZeroExpanded = false,
}: AccordionProps) => {
  const [expandedItems, setExpandedItems] = useState(new Set(expandedItemsProp ?? []));
  const items: HTMLButtonElement[] = [];
  const { keyboardProps } = useKeyboard({
    onKeyDown: (e) => {
      e.continuePropagation();

      const buttonIndex = getButtonIndex(e.target as HTMLElement, items);

      if (buttonIndex < 0) {
        return;
      }

      if (e.key === 'ArrowDown') {
        const index = mod(buttonIndex + 1, items.length);
        items[index].focus();
      } else if (e.key === 'ArrowUp') {
        const index = mod(buttonIndex - 1, items.length);
        items[index].focus();
      } else if (e.key === 'Home') {
        items[0].focus();
      } else if (e.key === 'End') {
        items[items.length - 1].focus();
      }
    },
  });
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
      <div {...keyboardProps}>
        {React.Children.map(children, (child, index) => {
          // @ts-ignore
          if (typeof child === 'object' && child?.type?.displayName === 'Accordion.Item') {
            return (
              // @ts-ignore
              <child.type
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                // @ts-ignore
                {...child.props}
                ref={(ref: HTMLButtonElement) => {
                  if (ref) {
                    items.push(ref);
                  }
                }}
              />
            );
          }
          return child;
        })}
      </div>
    </AccordionContext.Provider>
  );
};

Accordion.Item = AccordionItem;
