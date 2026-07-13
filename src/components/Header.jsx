import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Header = ({ isDarkMode, toggleDarkMode }) => {
        return(
        <>
            <Container fluid>
                <header>
                    <Navbar expand="lg" sticky="top" className="bg-transparent">
                        <Navbar.Brand href="#">Sneha Makeover</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto"></Nav>
                            <Nav>
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/service">Services</Nav.Link>
                                <Nav.Link href="/contact">Contact Us</Nav.Link>
                                <NavDropdown title="Register" id="basic-nav-dropdown" align="start">
                                    <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/login">
                                        Login
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                        <div className="dark-mode-box">
                            <DarkModeSwitch
                                checked={isDarkMode}
                                onChange={toggleDarkMode}
                                size={18}
                                />
                        </div>
                    </Navbar>
                </header>
            </Container>
        </>    
    );
};


export default Header;