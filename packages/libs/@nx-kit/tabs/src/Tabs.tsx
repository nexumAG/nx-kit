import React from 'react';
import { useTabList, useTab, useTabPanel } from '@react-aria/tabs';
import { useTabListState } from '@react-stately/tabs';
import { Item } from '@react-stately/collections';
import { TabsProps } from './Tabs.types';

// export const Tabs = ({ className }: TabsProps) => {
//   return (
//     <div className={className}>Let me just change this one line of code...</div>
//   );
// };

export const Tabs = (props) => {
  const state = useTabListState(props);
  const ref = React.useRef(null);
  const { tabListProps } = useTabList(props, state, ref);
  return (
    <div style={{ height: '150px' }}>
      <div {...tabListProps} ref={ref} style={{ display: 'flex', borderBottom: '1px solid grey' }}>
        {[...state.collection].map((item) => (
          <Tab key={item.key} item={item} state={state} />
        ))}
      </div>
      <TabPanel key={state.selectedItem?.key} state={state} />
    </div>
  );
};

const Tab = ({ item, state }) => {
  const { key, rendered } = item;
  const ref = React.useRef(null);
  const { tabProps } = useTab({ key }, state, ref);
  const isSelected = state.selectedKey === key;
  const isDisabled = state.disabledKeys.has(key);
  return (
    <div
      {...tabProps}
      ref={ref}
      style={{
        padding: '10px',
        borderBottom: isSelected ? '3px solid var(--blue)' : undefined,
        opacity: isDisabled ? '0.5' : undefined,
      }}
    >
      {rendered}
    </div>
  );
};

const TabPanel = ({ state, ...props }) => {
  const ref = React.useRef(null);
  const { tabPanelProps } = useTabPanel(props, state, ref);
  return (
    <div {...tabPanelProps} ref={ref} style={{ padding: '10px' }}>
      {state.selectedItem?.props.children}
    </div>
  );
};

Tabs.Item = Item;
