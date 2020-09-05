import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path='/checkout'>Chekout page</Route>
            <Route path='/login'>Login page</Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
