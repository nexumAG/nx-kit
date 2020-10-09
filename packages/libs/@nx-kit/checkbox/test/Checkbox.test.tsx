import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '../../styling';
import { theme } from '../../theme-default';
import { Checkbox } from '../src';

describe('Checkbox component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ThemeProvider theme={theme}><Checkbox /></ThemeProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
