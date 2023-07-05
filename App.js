import React ,{useEffect} from "react"
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import Login from './Login.js';
import {BrowserRouter as Router, Switch, Route}
from "react-router-dom";
import {auth} from "./Firebase";
import { UseStateValue } from "./StateProvider";

function App() {
  const [dispatch] = UseStateValue();

  //useEffect is an event listener in react

  useEffect(() => {
    //will only run once when the app component loads...
    
    auth.onAuthStateChanged(authUser => {
      console.log('The USER IS >>> ',authUser);

      if(authUser) {
        //the user just logged in / the user was logged in
        //Writes the info into datalayer
        dispatch({
          type:'SET_USER',
          user: authUser
        })
        //if you refresh also sets the user to authUser
      }
      else{
        //The user is logged out
        dispatch({
          type:'SET_USER',
          user: null
        })
        //If a person is logged out sets the user to null
      }
    })
  })

  // add [user,basket])
  //everytime user or basket changes it runs
  //as not adding anything removed the sqaure brackets after "}"
  return (
    //BEM convection
    <Router>
      <div className="app">
      {/* As Header is required irrespective of the route we switch so it is pasted directly outside */}
        <Switch>    {/* Switches to one of the router based on the condition we set */}
          <Route path = '/login'>
            {/* <h1>Login page</h1> */}
            <Login />
          </Route>
          <Route path = "/checkout">
            <Header />
            <Checkout/>
          </Route>
          <Route path = "/">
            <Header />
            <Home />
          </Route>
        </Switch>
        {/* Make Sure ur default route is at bottom. */}
      </div>
    </Router>
  );
}

export default App;
