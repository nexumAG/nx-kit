import React from 'react';
import { useTabList, useTab, useTabPanel } from '@react-aria/tabs';
import { useTabListState } from '@react-stately/tabs';
import { Item } from '@react-stately/collections';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { styled } from '@nx-kit/styling';
import { TabsProps, TabsStyledProps } from './Tabs.types';

const TabsStyled = styled.div<TabsStyledProps>`
  ${({ theme }) => theme?.component?.tabs?.global};
  ${({ theme, skin }) => skin && theme?.component?.tabs?.skin?.[skin]};
`;

export const Tabs = ({ className, skin, ...props }: TabsProps) => {
  const state = useTabListState(props);
  const ref = React.useRef(null);
  const { tabListProps } = useTabList(props, state, ref);

  return (
    <TabsStyled className={className} skin={skin} orientation={props.orientation ?? 'horizontal'}>
      <div {...tabListProps} ref={ref}>
        {[...state.collection].map((item) => (
          <Tab key={item.key} item={item} state={state} />
        ))}
      </div>
      <TabPanel key={state.selectedItem?.key} state={state} />
    </TabsStyled>
  );
};

const Tab = ({ item, state }: any) => {
  const { key, rendered } = item;
  const ref = React.useRef(null);
  const { tabProps } = useTab({ key }, state, ref);
  const { focusProps, isFocusVisible } = useFocusRing();
  return (
    <div {...mergeProps(tabProps, focusProps)} ref={ref} data-is-focused={isFocusVisible}>
      {rendered}
    </div>
  );
};

const TabPanel = ({ state, ...props }: any) => {
  const ref = React.useRef(null);
  const { tabPanelProps } = useTabPanel(props, state, ref);
  const { focusProps, isFocusVisible } = useFocusRing();
  return (
    <div {...mergeProps(tabPanelProps, focusProps)} ref={ref} data-is-focused={isFocusVisible}>
      {state.selectedItem?.props.children}
    </div>
  );
};

Tabs.Item = Item;
