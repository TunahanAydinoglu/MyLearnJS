import React, {Component}  from "react";
import Category from "./Category";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

class App extends Component {

  state={
    currentCategory:""
  }

  changeCategory = (category)=>{
    this.setState({ currentCategory: category.categoryName})
}
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
              <Category currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={infoCategory} />
            </Col>
            <Col xs="9">
              <ProductList currentCategory={this.state.currentCategory} info={infoProduct} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
