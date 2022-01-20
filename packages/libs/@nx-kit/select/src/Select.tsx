import React, { forwardRef, useCallback, useRef } from 'react';
import { HiddenSelect, useSelect } from '@react-aria/select';
import { Item } from '@react-stately/collections';
import { useSelectState } from '@react-stately/select';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { useButton } from '@react-aria/button';
import { useHover } from '@react-aria/interactions';
import {
  styled,
  getSpacing,
  getFlexItem,
  getPosition,
  getColor,
  getLayout,
  getFont,
  getTypo,
  compose,
} from '@nx-kit/styling';
import { Popover, PopoverTrigger } from '@nx-kit/overlay';
import { useSlotProps } from '@nx-kit/slot';
import { mergeRefs } from '@nx-kit/utils';
import { SelectProps, SelectStyledProps } from './Select.types';
import { ListBox } from './ListBox';

interface CompoundComponent
  extends React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLElement>> {
  Item: typeof Item;
}

const SelectStyled = styled.div<SelectStyledProps>`
  ${({ theme }) => theme?.component?.select?.global};
  ${({ theme, skin }) => skin && theme?.component?.select?.skin?.[skin]};
  ${compose(getSpacing, getFlexItem, getPosition, getColor, getLayout, getTypo)}
  ${getFont};
`;

const Select = ({ slot, ...rest }: SelectProps, ref?: React.Ref<HTMLElement | null>) => {
  const {
    className,
    skin,
    styles,
    hasError = false,
    ...props
  } = useSlotProps<SelectProps>(slot ?? 'field', rest);

  const state = useSelectState(props);

  const localRef = useRef<HTMLElement>(null);
  const { triggerProps, valueProps, menuProps } = useSelect(props, state, localRef);

  const { buttonProps, isPressed } = useButton(triggerProps, localRef);

  const { focusProps, isFocusVisible } = useFocusRing();

  const mergedRefs = useCallback(mergeRefs<HTMLElement | null>(ref, localRef), [ref]);

  const { hoverProps, isHovered } = useHover({ isDisabled: props.isDisabled ?? false });

  // TODO: How to get the label text for HiddenSelect?

  return (
    <PopoverTrigger
      positionElement={localRef.current ?? undefined}
      behaviour="stayOnScrollNoPortal"
      placement="bottom"
    >
      <SelectStyled
        className={className}
        skin={skin}
        styles={styles}
        isOpen={state.isOpen}
        isFocused={isFocusVisible}
        hasError={hasError}
        isDisabled={props.isDisabled ?? false}
        isHovered={isHovered}
        isActive={isPressed}
      >
        <HiddenSelect state={state} triggerRef={localRef} label="" name={props.name} />
        <button type="button" ref={mergedRefs} {...mergeProps(buttonProps, focusProps, hoverProps)}>
          <span {...valueProps}>
            {state.selectedItem
              ? state.selectedItem.rendered
              : props.placeholder ?? 'Select an option'}
          </span>
        </button>
        <Popover
          isOpen={state.isOpen}
          onClose={state.close}
          animationDisabled
          // TODO: https://github.com/adobe/react-spectrum/issues/1379
          shouldCloseOnBlur={false}
        >
          <ListBox {...menuProps} state={state} />
        </Popover>
      </SelectStyled>
    </PopoverTrigger>
  );
};

const SelectWithRef = forwardRef(Select) as CompoundComponent;

SelectWithRef.Item = Item;

export { SelectWithRef as Select };
