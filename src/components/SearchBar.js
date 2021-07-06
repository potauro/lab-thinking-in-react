import React, {Component} from 'react';

class SearchBar extends Component {




    render(){
        return(
        <div className ="blue">
            <label> Search</label>
            <input type="text" value={this.props.query} onChange={this.props.handleQuery}></input>
            <p>Only show products on stock</p>
        </div>
        )}
}



export default SearchBar;