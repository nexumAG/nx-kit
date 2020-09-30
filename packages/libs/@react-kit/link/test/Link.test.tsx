import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Link />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
