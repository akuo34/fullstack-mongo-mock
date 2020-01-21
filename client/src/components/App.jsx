import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';

import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      current: {},
      products: []

    }
    this.clickHandler = this.clickHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts() {
    axios
      .get('/name/products')
      .then((response) => {
        if (Object.keys(this.state.current).length === 0) {
          this.setState({
            current: response.data[0],
            products: response.data
          })
        } else {
          var id = this.state.current._id;
          response.data.forEach( product => {
            if (id === product._id) {
              this.setState({
                current: product,
                products: response.data
              })
            }
          })
        }
        
      })
      .catch(err => console.error(err))
  }

  clickHandler(event) {
    event.preventDefault();

    var _id = event.target.dataset.item;
    console.log(_id);

    this.state.products.forEach( product => {
      if (product._id === _id) {
        this.setState({
          current: product
        })
      }
    })
  }

  submitHandler(event) {
    event.preventDefault();

    var _id = event.target.dataset.id;
    var newbid = event.target.newbid.value;
    console.log(_id)
    console.log(newbid);

    var request = { curr_bid: newbid }

    axios
      .put(`/name/products/${_id}`, request)
      .then(() => {
        this.getAllProducts();
        console.log("bid submitted")
      })
      .catch( err => console.error(err))
  }

  render() {
  
    return(
      <div>
        <div>
          <h1>EBID</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
        </div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            <ProductViewer current={this.state.current} submitHandler={this.submitHandler}/>
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList clickHandler={this.clickHandler} items={this.state.products} />
          </div>
        </div>
      </div>
    )
  }
}