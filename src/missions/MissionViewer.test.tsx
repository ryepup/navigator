import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MissionViewer from './MissionViewer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MissionViewer />, div);
});
