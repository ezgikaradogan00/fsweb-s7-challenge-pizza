import React from "react";
import {Route, Switch, useHistory } from "react-router-dom";
import Anasayfa from './components/Anasayfa/Anasayfa.js'
import Form from "./components/Form/Form.js";
import Success from "./components/Success/Success.js";
import Seçenekler from "./components/Seçenekler/Seçenekler.js";
import {Link} from 'react-router-dom';
import "./App.css";
import logo from "./logo.svg";

 







const App = () => {

  
  return (
    <>
    <div className="logo">
      
      <Link to="/">
          <img src={logo} alt='logo' />
        </Link>


    </div>
      
      
        <Switch>

          <Route exact path="/">

           <Anasayfa/>

          </Route>

         

          <Route exact path="/secenekler">

            <Seçenekler/>

          </Route>


          <Route exact path="/pizza">

            <Form/>

          </Route>

          <Route exact path="/success">

            <Success/>

          </Route>




        </Switch>
      
      
    
        
    </>

    



  );
  
  
};
export default App;
