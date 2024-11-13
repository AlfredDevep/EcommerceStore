import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa';
import logo from '../assets/logo.png';   

export const Header = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
            <Navbar.Brand href="/">
                <img src={logo} alt="ProShop" width="50" height="50" /> ProShop
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link href="/cart">
                    <FaShoppingCart /> Cart
                </Nav.Link>
                <Nav.Link href="/login">
                    <FaUser /> Sign In
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}


