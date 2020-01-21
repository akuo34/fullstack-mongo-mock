import React from 'react';

const Products = (props) => {
   return(
    <div className='product-list-entry'>``
      <h5 data-item={props.item._id} onClick={props.clickHandler}>{props.item.item}</h5>
      {/* <img className="listimages" src={props.item.image} alt="image not available"></img> */}
    </div>
  )
}

export default Products