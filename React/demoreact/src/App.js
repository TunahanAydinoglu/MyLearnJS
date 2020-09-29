import React, { Component } from "react";
import Category from "./Category";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

class App extends Component {
  state = {
    currentCategory: "",
    products:[]
  };
  componentDidMount(){
    this.getProducts();
}
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
      if(categoryId){
        url += "?categoryId="+categoryId;
      }
      fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id)
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
          <Row>
            <Navi info={infoNavi} />
          </Row>
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
