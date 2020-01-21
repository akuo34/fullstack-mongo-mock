import React from 'react';
  
const Products = (props) => {
   return(
    <div className='product-list-entry'>
      <img src={props.item.image} alt="image not available"></img>
      {props.item.item}
    </div>
  )
}

export default Products