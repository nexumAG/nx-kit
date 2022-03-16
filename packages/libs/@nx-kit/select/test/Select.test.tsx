import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '../../styling';
import { theme } from '../../theme-default';
import { Select } from '../src';

describe('Select component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <Select placeholder="Select an option" name="test" aria-label="test">
          <Select.Item key="item1" textValue="item1">
            Item 1
          </Select.Item>
          <Select.Item key="item2" textValue="item2">
            Item 2
          </Select.Item>
        </Select>
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
