'use client';
import Link from 'next/link';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Pottery World</Navbar.Brand>
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
              <NavDropdown.Item as={Link} href="/product/1">
                Product1
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/product/2">
                Product2
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/product/3">
                Product3
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/product/4">
                Product4
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
