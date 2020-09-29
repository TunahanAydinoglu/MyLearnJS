import React, { Component } from "react";
import Category from "./Category";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: [],
  };
  componentDidMount() {
    this.getProducts();
  }
  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
  };
  removeFromCart=(product)=>{
    let newCart = this.state.cart.filter(c=>c.product.id!==product.id)
    this.setState({cart:newCart});
  }
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  changeCategory = (category) => {
    this.setState({ currentCategory: category });
    this.getProducts(category.id);
  };
  render() {
    let infoProduct = {
      title: "Product List",
    };
    let infoCategory = {
      title: "Category List",
    };
    let infoNavi = {
      title: "Navi",
    };
    return (
      <div>
        <Container>
          <Navi cart={this.state.cart} removeFromCart={this.removeFromCart} info={infoNavi} />
          <Row>
            <Col xs="3">
              <Category
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={infoCategory}
              />
            </Col>
            <Col xs="9">
              <ProductList
                addToCart={this.addToCart}
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={infoProduct}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
