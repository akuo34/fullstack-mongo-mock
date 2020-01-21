import React from 'react';

export default class ProductViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  
  render(){
    return(
      <div className = 'product-viewer'>
        <h4>{this.props.current.item}</h4>
        <span>Current Bid is </span>
        {this.props.current.curr_bid}
        <div> 
          <span>Ends in </span>
        {this.props.current.ends_in}
        <span> days!!</span>
        </div>
        <form id="bid" data-id={this.props.current._id} onSubmit={this.props.submitHandler}>
          <input placeholder="Enter your bid!" type="number" min={this.props.current.curr_bid} name="newbid"></input>
          <input type="submit" value="Submit"></input>
        </form>
        <img src={this.props.current.image} alt="image not available"></img>
      </div>
    )
  }
}