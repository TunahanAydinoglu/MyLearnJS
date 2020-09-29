import React, { Component } from "react";
import { Table,Button } from "reactstrap";

class ProductList extends Component {
 
  
  render() {
    return (
      <div>
        <h2>{this.props.info.title + " - " + this.props.currentCategory.categoryName}</h2>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Category Id</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>Unit In Stock</th>
              <th>Add To Cart</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => ( 
              <tr key={product.id}>
              <th scope="row" >{product.id}</th>
              <td>{product.productName}</td>
              <td>{product.categoryId}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitPrice}</td>
              <td>{product.unitsInStock}</td>
              <td> <Button onClick={()=>this.props.addToCart(product)} color="info">Add</Button></td>
            </tr>
            )
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ProductList;