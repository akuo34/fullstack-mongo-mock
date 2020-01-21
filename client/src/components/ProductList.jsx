import React from 'react';
import Products from './Products';
  
const ProductList = (props) => {
   return(
    <div className='product-list'>
      {props.items.map( (item, key) => 
      <Products 
        item={item} 
        key={key}
        clickHandler={props.clickHandler}
      /> )}
    </div>
  )
}

export default ProductList