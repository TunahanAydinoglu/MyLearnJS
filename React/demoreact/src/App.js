import React from "react";
import Category from "./Category";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

function App() {
  let infoProduct = {
    title:"Product List"
  }
  let infoCategory = {
    title:"Category List"
  }
  let infoNavi = {
    title:"Navi"
  }

 

  return (
    <div>
      <Container>
        <Row>
          <Navi info={infoNavi} />
        </Row>
        <Row>
          <Col xs="3">
            <Category info={infoCategory} />
          </Col>
          <Col xs="9">
            <ProductList info={infoProduct} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
