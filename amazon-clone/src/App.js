import React, {useEffect} from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import './App.css';
import Checkout from './components/checkout/Checkout';
import { useStateValue } from './provider/StateProvider';
import { auth } from './firebase';
import Login from './components/login/Login';

function App() {

  const [{basket, user}, dispatch] = useStateValue();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user=>{
      if(user){
        dispatch({
          type:"SET_USER",
          user: user
        })
      }
      else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })

    return ()=>{
      unsubscribe();
    }

  },[]);

  return (
    <div className="App">
        <Router>
            <Header/>
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path='/checkout' component={Checkout}></Route>
            <Route path='/login'><Login/></Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
