import * as React from 'react';
import * as ReactDOM from 'react-dom';
import JobBoard from './JobBoard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JobBoard />, div);
});
