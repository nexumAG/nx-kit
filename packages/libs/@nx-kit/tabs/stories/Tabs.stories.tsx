import React from 'react';
import { Tabs } from '../src';

export default {
  title: '@nx-kit/tabs',
  component: Tabs,
  subcomponents: { 'Tabs.Item': Tabs.Item },
};

export const Default = () => (
  <Tabs skin="default" disabledKeys={['tab3']}>
    <Tabs.Item key="tab1" title="Tab1">
      This is the first tab
    </Tabs.Item>
    <Tabs.Item key="tab2" title="Tab2">
      This is the second tab
    </Tabs.Item>
    <Tabs.Item key="tab3" title="Tab3">
      This is the third tab
    </Tabs.Item>
  </Tabs>
);

export const Vertical = () => (
  <Tabs skin="default" disabledKeys={['tab3']} orientation="vertical">
    <Tabs.Item key="tab1" title="Tab1">
      This is the first tab
    </Tabs.Item>
    <Tabs.Item key="tab2" title="Tab2">
      This is the second tab
    </Tabs.Item>
    <Tabs.Item key="tab3" title="Tab3">
      This is the third tab
    </Tabs.Item>
  </Tabs>
);
