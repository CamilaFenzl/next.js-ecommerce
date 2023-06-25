import Link from 'next/link';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { products } from '../products';
import { useCookies } from 'react-cookie';
import { BagFill } from 'react-bootstrap-icons';

export default function Navigation({ currentCartCookie }) {
  console.log('totoro', currentCartCookie);

  let count = 0;
  // Object.keys returns an array with all keys of an object
  const cartList = Object.keys(currentCartCookie).map((key) => {
    console.log('this is cookie with id', key);
    const product = products.find((p) => {
      console.log('this is product with id', p.id, 'cookie id', key);
      return p.id == key;
    });
    product.quantity = currentCartCookie[key];
    count += product.quantity;
  });
  console.log(cartList, products);
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
            </Nav>
          </Navbar.Collapse>
          <Nav.Link as={Link} href="/cart" data-test-id="cart-link">
            <BagFill /> <span data-test-id="cart-count">{count}</span>
          </Nav.Link>
        </Container>
      </Navbar>
    </header>
  );
}
