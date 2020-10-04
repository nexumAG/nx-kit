import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '../../styling';
import { theme } from '../../theme-default';
import { Overlay } from '../src';

describe('Overlay component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ThemeProvider theme={theme}><Overlay /></ThemeProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
