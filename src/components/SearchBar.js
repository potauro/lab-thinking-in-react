import React, {Component} from 'react';

class SearchBar extends Component {

    render(){
        return(
        <div className ="blue">
            <h3> Search</h3>
            <input type="search"></input>
            <p>Only show products on stock</p>
        </div>
        )}
}



export default SearchBar;