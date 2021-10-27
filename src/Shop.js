import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//For API Requests
import axios from 'axios';

//Import react routes and its other modules
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import StripeCheckout from 'react-stripe-checkout';

class Shop extends React.Component


{

    onToken = (token) => {
    /*fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });*/

    alert(`We are in business`);


 var a = document.createElement("a");
  a.href = 'http://www.africau.edu/images/default/sample.pdf';
  a.setAttribute("download", 'Codesource_Logo.png');
  a.click();





  }


    //Declare state varible to store request data
  constructor(props) {
    super(props)
      this.state = {
        data: []
        
              }



      }
      componentDidMount(){
        //Get all products details in bootstrap table
        axios.get('http://localhost/digital_product/apis/notifications/').then(res => 
        {
        //Storing products detail in state array object<br>        
        this.setState({data: res.data});
           }); 
        
        }

        
     
  render()
  {
    return (
       <div className="shop">
         

              <div class="row">
               
                    <div class="col-lg-4 col-md-6 mb-4">
                      <div class="card h-100">
                        <a href="#"><img class="card-img-top" src="https://i.ebayimg.com/images/g/OBkAAOSwYXVg1dNK/s-l300.jpg" alt="" /></a>
                        <div class="card-body">
                          <h4 class="card-title">
                            <a href="#">Product 2 </a>
                          </h4>
                          <h5>120dt</h5>
                          <p class="card-text">test Product test product</p>
                        </div>
                        <div class="card-footer">
                          <StripeCheckout
        amount="1200"
        billingAddress
        description="Awesome Product"
        image="data:image/png;base64,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"
        locale="auto"
        name="https://react-js-stripe-app.herokuapp.com/"
        stripeKey="pk_test_51JdvSvKcoVokL2CnzhGTKnOJ3yZIdAEmkey9aJA7GorPeUb1D1X4DL5Sa6x5dItZ8JRp9JhYtssgNg2xwxgmYIEz00caJ2AbAN"
        token={this.onToken}
        zipCode
      />
                        </div>
                        
                      </div>
                    </div>


                     <div class="col-lg-4 col-md-6 mb-4">
                      <div class="card h-100">
                        <a href="#"><img class="card-img-top" src="https://i.ebayimg.com/images/g/OBkAAOSwYXVg1dNK/s-l300.jpg" alt="" /></a>
                        <div class="card-body">
                          <h4 class="card-title">
                            <a href="#">Product 1 </a>
                          </h4>
                          <h5>120 dt</h5>
                          <p class="card-text">test Product test product</p>
                        </div>
                        <div class="card-footer">
                          <StripeCheckout
        amount="1200"
        billingAddress
        description="Awesome Product"
        image="data:image/png;base64,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"
        locale="auto"
        name="https://react-js-stripe-app.herokuapp.com/"
        stripeKey="pk_test_51JdvSvKcoVokL2CnzhGTKnOJ3yZIdAEmkey9aJA7GorPeUb1D1X4DL5Sa6x5dItZ8JRp9JhYtssgNg2xwxgmYIEz00caJ2AbAN"
        token={this.onToken}
        zipCode
      />
                        </div>
                        
                      </div>
                    </div>
                

              </div>

              
       </div>
    )
  }
}
export default Shop;