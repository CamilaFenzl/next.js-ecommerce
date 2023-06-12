import Link from 'next/link';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import React from 'react';
export default function Navigation() {
  const [cookies, setCookie, removeCookie] = useCookies(['camilashop-cart']);

  console.log('cookies', cookies);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} href="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} href="/about">
                About
              </Nav.Link>
              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} href="/products/0">
                  Mug
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/products/1">
                  Pink body vase
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/products/2">
                  Yoga Dame
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/products/3">
                  Woman
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} href="/cart">
                Cart
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
