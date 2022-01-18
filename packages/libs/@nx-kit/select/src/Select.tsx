import React, { useRef } from 'react';
import { HiddenSelect, useSelect } from '@react-aria/select';
import { Item } from '@react-stately/collections';
import { useSelectState } from '@react-stately/select';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { useButton } from '@react-aria/button';
import { styled } from '@nx-kit/styling';
import { SelectProps, SelectStyledProps } from './Select.types';

const SelectStyled = styled.div<SelectStyledProps>`
  ${({ theme }) => theme?.component?.select?.global};
  ${({ theme, skin }) => skin && theme?.component?.select?.skin?.[skin]};
`;

export const Select = ({ className, skin, ...props }: SelectProps) => {
  const state = useSelectState(props);

  const ref = useRef(null);
  const { labelProps, triggerProps, valueProps, menuProps } = useSelect(props, state, ref);

  const { buttonProps } = useButton(triggerProps, ref);

  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <SelectStyled
      className={className}
      skin={skin}
      isOpen={state.isOpen}
      isFocusVisible={isFocusVisible}
    >
      <label {...labelProps}>{props.label}</label>
      <HiddenSelect state={state} triggerRef={ref} label={props.label} name={props.name} />
      <button type="button" {...mergeProps(buttonProps, focusProps)} ref={ref}>
        <span {...valueProps}>
          {state.selectedItem ? state.selectedItem.rendered : 'Select an option'}
        </span>
      </button>
    </SelectStyled>
  );
};

Select.Item = Item;
