import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '../../styling';
import { theme } from '../../theme-default';
import { Select } from '../src';

describe('Select component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ThemeProvider theme={theme}><Select /></ThemeProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
