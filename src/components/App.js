import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import GiphSearch from './GiphSearch';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={GiphSearch}/>
          <Route path="/search/:giph" component={GiphSearch}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
