import React from "react";
import "./App.css";
import Header from './Header';
import Product from "./Product";
import Payment from './Payment' ;
import Home from "./Home";
//import { Route } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { auth } from "./firebase";
import Orders from "./Orders";
const promise =loadStripe('pk_test_51JQawUSGHTm4lFjJI9LwQxcCvBMn3fmSXmhG0r5m307HuaLtt2H5JvoMdfdy1iItWLr46lRi3cbgLwqRwSjV2kHx00CgRfkbSc');

function App() {
  const [{ user }, dispatch] = useStateValue();
  // useEffect <- POWERFUL
  // piece of code that runs based on a give condition
  

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>

          <Route path="/Orders">
            <Orders/>
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/payment'>
            <Header />
            <Elements stripe = {promise}>
             <Payment/>
            </Elements> 
          </Route>
        
          <Route path='/'>
            <Header /> 
            <Home /> 
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;