import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import './App.css';
import Checkout from './components/checkout/Checkout';

function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path='/checkout' component={Checkout}></Route>
            <Route path='/login'>Login page</Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
