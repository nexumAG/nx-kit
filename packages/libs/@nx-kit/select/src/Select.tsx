import React, { forwardRef, useCallback, useRef } from 'react';
import { HiddenSelect, useSelect } from '@react-aria/select';
import { Item } from '@react-stately/collections';
import { useSelectState } from '@react-stately/select';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { useButton } from '@react-aria/button';
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

const Select = (
  { className, skin, styles, ...props }: SelectProps,
  ref?: React.Ref<HTMLElement | null>
) => {
  const state = useSelectState(props);

  const localRef = useRef<HTMLElement>(null);
  const { labelProps, triggerProps, valueProps, menuProps } = useSelect(props, state, localRef);

  const { buttonProps } = useButton(triggerProps, localRef);

  const { focusProps, isFocusVisible } = useFocusRing();

  const buttonSlotProviderProps = useSlotProps<HTMLButtonElement>('button');

  const mergedRefs = useCallback(mergeRefs<HTMLElement | null>(ref, localRef), [ref]);

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
        isFocusVisible={isFocusVisible}
      >
        <label {...labelProps}>{props.label}</label>
        <HiddenSelect state={state} triggerRef={localRef} label={props.label} name={props.name} />
        <button
          type="button"
          ref={mergedRefs}
          {...mergeProps(buttonProps, buttonSlotProviderProps, focusProps)}
        >
          <span {...valueProps}>
            {state.selectedItem
              ? state.selectedItem.rendered
              : props.placeholder ?? 'Select an option'}
          </span>
        </button>
        <Popover isOpen={state.isOpen} onClose={state.close} animationDisabled shouldCloseOnBlur>
          <ListBox {...menuProps} state={state} />
        </Popover>
      </SelectStyled>
    </PopoverTrigger>
  );
};

const SelectWithRef = forwardRef(Select) as CompoundComponent;

SelectWithRef.Item = Item;

export { SelectWithRef as Select };
