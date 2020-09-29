import React, { useState } from "react";
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
  Button,
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
                      <Col>{cartItem.product.productName}</Col>
                      <Col>
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
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
