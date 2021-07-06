import React, {Component} from 'react';
import ProductTable from './ProductTable.js';
import SearchBar from './SearchBar.js'
import ProductRow from './ProductRow.js';

class FilterableProductTable extends Component {

    render(){
        return(
            <div className = "orange">
            
        <h1> IronStore</h1>

        <SearchBar />
        <ProductTable />

</div>
        )}
}



export default FilterableProductTable;