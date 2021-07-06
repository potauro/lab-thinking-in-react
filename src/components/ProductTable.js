import React, {Component} from 'react';
import ProductRow from './ProductRow'

class ProductTable extends Component {

    render(){
        const products = this.props.products
        return(
            <div className= "green">
        <table>
    <tr>
        <th>Name</th>
        <th>Price</th>
    </tr>
    {products.map(function (product) {
        return <ProductRow key={product.id} product={product} />

    })}
    
    </table>
    
        </div>
        )}
}



export default ProductTable;