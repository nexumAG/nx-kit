import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '../../styling';
import { theme } from '../../theme-default';
import { Accordion } from '../src';

describe('Accordion component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <Accordion>
          <Accordion.Item title="Item 1">
            <p>Item 1 content</p>
          </Accordion.Item>
        </Accordion>
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
