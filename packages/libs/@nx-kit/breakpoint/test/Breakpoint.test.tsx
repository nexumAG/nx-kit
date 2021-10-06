import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '../../styling';
import { theme } from '../../theme-default';
import { Breakpoint, BreakpointProvider } from '../src';

describe('Breakpoint component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <BreakpointProvider>
          <Breakpoint min="xs">Test</Breakpoint>
        </BreakpointProvider>
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
