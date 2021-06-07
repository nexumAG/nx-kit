import React, { useCallback, useContext, useEffect, useState } from 'react';
import { mergeProps, useId } from '@react-aria/utils';
import { usePress, useHover } from '@react-aria/interactions';
import { useFocusRing } from '@react-aria/focus';
import { styled } from '@nx-kit/styling';
import { mergeRefs } from '@nx-kit/utils';
import { AccordionContext } from './AccordionContext';
import { AccordionItemProps, AccordionItemStyledProps } from './Accordion.types';

const AccordionItemStyled = styled.div<AccordionItemStyledProps>`
  ${({ theme }) => theme?.component?.accordion?.global};
  ${({ theme, skin }) => skin && theme?.component?.accordion?.skin?.[skin]};
`;

const AccordionItem = (
  {
    id: idProp,
    title: titleProp,
    isOpen: isOpenProp = false,
    children,
    className,
    noControl = false,
    onPress,
  }: AccordionItemProps,
  ref?: React.Ref<HTMLButtonElement>
) => {
  const id = useId(idProp);
  const idRegion = useId();
  const localRef = React.useRef<HTMLButtonElement | null>(null);
  const { skin, expandedItems, onChange, allowZeroExpanded, headingLevel } =
    useContext(AccordionContext);
  const [isOpen, setIsOpen] = useState(isOpenProp);
  const { pressProps } = usePress({
    onPress: () => onToggle(),
  });
  const { focusProps, isFocusVisible } = useFocusRing();
  const mergedRefs = useCallback(mergeRefs<HTMLButtonElement | null>(ref, localRef), [ref]);

  useEffect(() => {
    const isOpenContext = expandedItems.has(id);
    setIsOpen(isOpenContext);
  }, [expandedItems]);

  useEffect(() => {
    onChange(id, isOpen);
    if (onPress) {
      onPress({ id, isOpen, buttonElement: localRef.current });
    }
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

  const isDisabled = (isOpen && !allowZeroExpanded && expandedItems.size < 2) || noControl;
  const { hoverProps, isHovered } = useHover({ isDisabled });
  const title = typeof titleProp === 'function' ? titleProp(isOpen, isDisabled) : titleProp;

  return (
    <AccordionItemStyled
      skin={skin}
      className={className}
      isFocused={isFocusVisible}
      isDisabled={isDisabled}
      isHovered={isHovered}
    >
      <div role="heading" aria-level={headingLevel}>
        <button
          id={id}
          ref={mergedRefs}
          type="button"
          aria-controls={idRegion}
          aria-expanded={isOpen}
          aria-disabled={isDisabled ? true : undefined}
          {...mergeProps(pressProps, focusProps, hoverProps)}
        >
          {title}
        </button>
      </div>
      <div id={idRegion} role="region" hidden={!isOpen} aria-labelledby={id}>
        {children}
      </div>
    </AccordionItemStyled>
  );
};

const AccordionItemWithRef = React.forwardRef(AccordionItem);
AccordionItemWithRef.displayName = 'Accordion.Item';
export { AccordionItemWithRef as AccordionItem };
