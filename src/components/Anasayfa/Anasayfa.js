import React from 'react';
import './Anasayfa.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const Home = () => {

    

    return (

     <div id= "menü-içerik">

        <Router>
            <Switch>
                <Route exact path="/">
                    <div className="text">

                    
                    
                        <div className="back">
                           
                            <div className="baslik2">
                                <h1 id="baslik2">
                                    KOD ACIKTIRIR
                                    <br />
                                    PIZZA, DOYURUR
                                </h1>
                            </div>
                            <div className='buttondiv'>
                                <Link to="/pizza" className='button-link'>
                                    <button id='button-container' >ACIKTIM</button>
                                  
                                </Link>
                            </div>
                        </div>

                        

                       
                            

                        
                    </div>
                </Route>
               <div>
               
               </div>
            </Switch>
    
        </Router>
     </div>

    
    );
};

export default Home;