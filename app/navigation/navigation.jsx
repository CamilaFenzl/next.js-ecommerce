import Link from 'next/link';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import React from 'react';
import { products } from '../products';
export default function Navigation() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} href="/" data-test-id="products-link">
                Home
              </Nav.Link>
              <Nav.Link as={Link} href="/about">
                About
              </Nav.Link>
              <NavDropdown title="Products" id="basic-nav-dropdown">
                {products.map((product) => {
                  return (
                    <NavDropdown.Item
                      as={Link}
                      href={`/products/${product.id}`}
                    >
                      {product.name}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
              <Nav.Link as={Link} href="/cart">
                Cart
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
