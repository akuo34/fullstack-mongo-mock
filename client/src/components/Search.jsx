import React from 'react';
  
var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" name="search"/>
    <button className="btn hidden-sm-down" onClick={props.searchHandler}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

export default Search;