import React, { Component } from "react";
import { connect } from "react-redux";
import Badge from "reactstrap/lib/Badge";
import { bindActionCreators } from "redux";
import * as productActions from '../../redux/actions/productActions';
import * as cartActions from '../../redux/actions/cartActions';
import { Table,Button } from "reactstrap";
import alertify from 'alertifyjs';


class ProductList extends Component {
  componentDidMount() {
      this.props.actions.getProducts();
  }
  addToCart=(product)=>{
    this.props.actions.addToCart({product,quantity:1});
    alertify.success(product.productName + "Added to Cart",2);
  }
  render() {
    return (
      <div>
        <h3>
          Products <Badge>{this.props.currentCategory.categoryName}</Badge>
        </h3>
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
              <td> <Button onClick={()=>this.addToCart(product)} color="info">Add</Button></td>
            </tr>
            )
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer
  };
}
function mapDispactToProps(dispact) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispact),
      addToCart: bindActionCreators(cartActions.addToCart,dispact)
    },
  };
}

export default connect(mapStateToProps, mapDispactToProps)(ProductList);
