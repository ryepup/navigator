import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Provider } from 'react-redux'

import Builder from './builder/Builder'
import JobBoard from './missions/JobBoard'
import MissionViewer from './missions/MissionViewer'
import store from './model/store'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

class App extends React.Component<null, null> {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/builder">Ship builder</Link></li>
              <li><Link to="/job-board">Get a job</Link></li>
            </ul>

            <hr />

            <Route exact={true} path="/" component={Home} />
            <Route path="/builder" component={Builder} />
            <Route path="/job-board" component={JobBoard} />
            <Route path="/misson-viewer" component={MissionViewer} />

          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
