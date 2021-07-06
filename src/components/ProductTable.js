import React, {Component} from 'react';
import ProductRow from './ProductRow'

class ProductTable extends Component {

    render(){
        return(
            <div className= "green">
        <table>
    <tr>
        <th>Name</th>
        <th>Price</th>
    </tr>
    <ProductRow />
    </table>
    
        </div>
        )}
}



export default ProductTable;