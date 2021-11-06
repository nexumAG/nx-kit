import React from 'react';
import { Tabs } from '../src';

export default {
  title: '@nx-kit/tabs',
  component: Tabs,
};

export const Default = () => (
  <Tabs>
    <Tabs.Item key="tab1" title="Tab1">
      This is the first tab
    </Tabs.Item>
    <Tabs.Item key="tab2" title="Tab2">
      This is the second tab
    </Tabs.Item>
  </Tabs>
);
