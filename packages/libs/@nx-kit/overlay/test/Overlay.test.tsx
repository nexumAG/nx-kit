import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '../../styling';
import { theme } from '../../theme-default';
import { Overlay, OverlayProvider } from '../src';

describe('Overlay component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <OverlayProvider>
          <Overlay />
        </OverlayProvider>
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
