import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Builder from './Builder';
import store from '../model/store'
import { Provider } from 'react-redux'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><Builder /></Provider>, div);
});
