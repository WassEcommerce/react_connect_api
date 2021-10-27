import React from 'react';

import './App.css';
//Bootstrap4.5
import 'bootstrap/dist/css/bootstrap.min.css';
//All components
import Shop from './Shop';
import Product from './Product';
import Partner from './Partner';
import NewProduct from './NewProduct';

//Import react routes and its other modules
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


class App extends React.Component {

  
  
  render() {
    return (
      <Router>
      <div className="MainDiv">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div class="container">
            <a class="navbar-brand" href="/">Demo Mode</a>
           
           
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                <a class="navbar-brand" href="#">Stripe Payement</a>
                    
 ||
                    <a class="navbar-brand" href="/partner">Partner Config</a>
                  
                </li>
              </ul>
          
          </div>
        </nav>

        <div class="container">
        <div class="margin-top">

        <div class="row">

            <div class="col-lg-3">

             &nbsp;

            </div>
            

            <div class="col-lg-9">

            <Switch>
            <Route exact path='/' component={Shop} />
            <Route exact path='/product/:id' component={Product} />
            <Route exact path='/partner/' component={Partner} />

            <Route exact path='/new-product/' component={NewProduct} />
            
          </Switch>
             

            </div>
           

          </div>

        </div>

          
        

        </div>
       
        
        
      </div>
      </Router>
    );
  }
}

export default App;