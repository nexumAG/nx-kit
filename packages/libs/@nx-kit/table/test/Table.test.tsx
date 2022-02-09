import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '../../styling';
import { theme } from '../../theme-default';
import { Table } from '../src';

describe('Table component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <Table />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
