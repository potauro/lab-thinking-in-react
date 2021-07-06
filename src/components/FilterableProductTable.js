import React, {Component} from 'react';
import ProductTable from './ProductTable.js';
import SearchBar from './SearchBar.js'
import ProductRow from './ProductRow.js';

class FilterableProductTable extends Component {

    state = {
        query : ""
    }


    render(){
        const products = this.props.products
        return(
            <div className = "orange">
            
        <h1> IronStore</h1>

        <SearchBar onSearch={this.onSearch}/>
        <ProductTable products={products} />

</div>
        )}
}



export default FilterableProductTable;