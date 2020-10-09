import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '../../styling';
import { theme } from '../../theme-default';
import { Form } from '../src';

describe('Form component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ThemeProvider theme={theme}><Form /></ThemeProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
