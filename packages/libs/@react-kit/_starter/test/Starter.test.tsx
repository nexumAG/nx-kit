import React from 'react';
import ReactDOM from 'react-dom';
import Starter from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Starter />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
