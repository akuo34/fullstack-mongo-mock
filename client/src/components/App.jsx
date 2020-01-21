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

  }

  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts() {
    axios
      .get('/name/products')
      .then((response) => {
        this.setState({
          current: response.data[0],
          products: response.data.slice(1)
        })
        console.log(this.state);
      })
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
            <ProductViewer current={this.state.current}/>
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList items={this.state.products} />
          </div>
        </div>
      </div>
    )
  }
}