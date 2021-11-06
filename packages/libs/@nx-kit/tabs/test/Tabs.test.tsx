import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '../../styling';
import { theme } from '../../theme-default';
import { Tabs } from '../src';

describe('Tabs component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ThemeProvider theme={theme}><Tabs /></ThemeProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
