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
} from "reactstrap";
import CartSummary from "../cart/CartSummary";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <Link to="">React</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="form1">Form 1</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="form2">Form 2</Link>
              </NavLink>
            </NavItem>
          </Nav>
          <Nav navbar>
            <CartSummary />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
