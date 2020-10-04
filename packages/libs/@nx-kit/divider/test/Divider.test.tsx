import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '../../styling';
import { theme } from '../../theme-default';
import { Divider } from '../src';

describe('Divider component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ThemeProvider theme={theme}><Divider /></ThemeProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
