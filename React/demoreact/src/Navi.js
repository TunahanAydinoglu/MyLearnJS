import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  Row,
  Col,
} from "reactstrap";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">GitHub</NavLink>
            </NavItem>
          </Nav>
          <Nav navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Your Cart - {props.cart.length}
              </DropdownToggle>
              <DropdownMenu right>
                {props.cart.map((cartItem) => (
                  <DropdownItem key={cartItem.product.id}>
                    <Row>
                      <Col xs="9">{cartItem.product.productName}</Col>
                      <Col xs="3">
                        <Badge color="warning">{cartItem.quantity}</Badge>{" "}
                        <Badge
                          onClick={() => props.removeFromCart(cartItem.product)}
                          color="danger"
                        >
                          x
                        </Badge>
                      </Col>
                    </Row>
                  </DropdownItem>
                ))}
                <DropdownItem divider />
                <DropdownItem>
                  <Link to="cart">Go to Cart</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
