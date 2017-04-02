import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Builder from './Builder';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Builder />, div);
});
