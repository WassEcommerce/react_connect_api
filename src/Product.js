import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
//Import react routes and its other modules
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
class Product extends React.Component
{
//Declare state varible to store request data
    constructor(props) {
        super(props)
          this.state = {
           
            productdetails:[]
                  }
          }
    componentDidMount()
    {
        //Get Product ID from URL
        var productid = window.location.pathname;
        productid = productid.split("product/");

        const fd = new FormData();
        fd.append('productid', productid[1]);
        axios.get('http://localhost/digital_product/apis/notifications/', fd
          ).then(res=>
          {
            console.log('done');
            console.log(res.data[0]);
            //Storing product detail in state array object
            this.setState({productdetails: res.data[0]});
           
          
          }
          );
    }
  render()
  {
    return (
       <div className="mt-3 mb-3">
         <h1>{this.state.productdetails.ptitle}</h1>
         <img class="d-block img-fluid img-circle-rounded" src={this.state.productdetails.pimage} alt="{result.pimage}" />
         <h5 className="mt-3 mb-3">{this.state.productdetails.pprice}</h5><br/>
         <p className="mt-3 mb-3">{this.state.productdetails.pdescription}</p>
         <div class="button">  <Link to={'/checkout-stripe/'+this.state.productdetails.pprice}>Payer avec stripe</Link></div>
       </div>
    )
  }
}
export default Product;