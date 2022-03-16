import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '../../styling';
import { theme } from '../../theme-default';
import { Tabs } from '../src';

describe('Tabs component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <Tabs>
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
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
