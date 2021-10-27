import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//For API Requests
import axios from 'axios';

//Import react routes and its other modules
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import StripeCheckout from 'react-stripe-checkout';

class Partner extends React.Component


{

   onToken = (token, addresses) => {
    // TODO: Send the token information and any other
    // relevant information to your payment process
    // server, wait for the response, and update the UI
    // accordingly. How this is done is up to you. Using
    // XHR, fetch, or a GraphQL mutation is typical.
  };


    //Declare state varible to store request data
  constructor(props) {
    super(props)
      this.state = {
        data: []
        
              }

      }
        
     
  render()
  {
    return (
       <div className="shop">
              <div class="row">
                <div class="col-lg-6 col-md-6 mb-4 text-center">
                      <div class="card h-100">
                        <div class="card-body ">
                        <button
                           type="button"
                           className="stripe-connect btn btn-primary"
                                  onClick={() => {
                                    if (window) {
                                          const url = `https://connect.stripe.com/oauth/v2/authorize?response_type=code&client_id=ca_KIt2rUtApTE3HZ75FwSnTRLnc3abQmiH&scope=read_write`;
                                          window.document.location.href = url;
                                    }
                                  }} >
                        <span>Connect with Stripe</span>
                          </button>
                        </div>
                      </div>
                    </div>



                    <div class="col-lg-6 col-md-6 mb-4 text-center">
                      <div class="card h-100">
                        <div class="card-body">
                       
                        <a href="/new-product" class="btn btn-primary">
                        Add New Product
                        </a>
                        </div>
                        
                      </div>
                    </div>




                

              </div>

              
       </div>
    )
  }
}
export default Partner;