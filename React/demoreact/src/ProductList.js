import React, { Component } from "react";
import { Table } from "reactstrap";

class ProductList extends Component {
  state = {
    products: [],
  };
  componentDidMount(){
      this.getProducts();
  }
  getProducts = () => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  render() {
    return (
      <div>
        <h2>{this.props.info.title + " - " + this.props.currentCategory}</h2>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Category Id</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>Unit In Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((product) => ( 
              <tr key={product.id}>
              <th scope="row" >{product.id}</th>
              <td>{product.productName}</td>
              <td>{product.categoryId}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitPrice}</td>
              <td>{product.unitsInStock}</td>
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