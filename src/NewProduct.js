import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//For API Requests
import axios from 'axios';

//Import react routes and its other modules
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import StripeCheckout from 'react-stripe-checkout';

class NewProduct extends React.Component


{

   constructor(props) {
        super(props)

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeLink = this.onChangeLink.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            link: '',
            price: ''
        }
    }


     onChangeTitle(e) {
        this.setState({ title: e.target.value })
    }

    onChangeLink(e) {
        this.setState({ link: e.target.value })
    }

    onChangePrice(e) {
        this.setState({ price: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        console.log(this.state.title);

        const userObject = {
            title: this.state.title,
            link: this.state.link,
            price: this.state.price
        };


        axios.post('http://localhost:4000/users/create', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });



         this.setState({ title: '', link: '', price: '' })

       }


        
     
  render()
  {
    return (
      <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Enter title</label>
                        <input type="text" value={this.state.title} onChange={this.onChangeTitle} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Enter pdf link</label>
                        <input type="text" value={this.state.link} onChange={this.onChangeLink} className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Enter description</label>
                        <input type="text" className="form-control" disabled/>
                    </div>

                    <div className="form-group">
                        <label>Enter price</label>
                        <input type="text" value={this.state.price} onChange={this.onChangePrice} className="form-control" />
                    </div>

                     <div className="form-group">
                      &nbsp;
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Ebook & Save" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
    )
  }
}
export default NewProduct;