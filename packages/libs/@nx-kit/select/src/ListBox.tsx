import React from 'react';
import type { AriaListBoxOptions } from '@react-aria/listbox';
import { useListBox, useOption } from '@react-aria/listbox';
import { ListState } from '@react-stately/list';
import type { Node } from '@react-types/shared';

interface ListBoxProps extends AriaListBoxOptions<unknown> {
  // eslint-disable-next-line react/require-default-props
  listBoxRef?: React.RefObject<HTMLUListElement>;
  state: ListState<unknown>;
}

interface OptionProps {
  item: Node<unknown>;
  state: ListState<unknown>;
}

export const ListBox = (props: ListBoxProps) => {
  const ref = React.useRef(null);
  const { listBoxRef = ref, state } = props;
  const { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <ul {...listBoxProps} ref={listBoxRef}>
      {[...state.collection].map((item) => (
        <Option key={item.key} item={item} state={state} />
      ))}
    </ul>
  );
};

const Option = ({ item, state }: OptionProps) => {
  const ref = React.useRef(null);
  const { optionProps, isSelected, isFocused, isDisabled } = useOption(
    { key: item.key },
    state,
    ref
  );

  let className;

  if (isSelected) {
    className = 'isSelected';
  } else if (isFocused) {
    className = 'isFocused';
  } else if (isDisabled) {
    className = 'isDisabled';
  }

  return (
    <li {...optionProps} ref={ref} className={className}>
      {item.rendered}
    </li>
  );
};
