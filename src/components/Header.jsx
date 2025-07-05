import React from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Header = ({ isDarkMode, toggleDarkMode }) => {    
    return(
        <>
            <Navbar expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="#">Sneha Makeover</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#contact">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="dark-mode-box">
                        <DarkModeSwitch
                            checked={isDarkMode}
                            onChange={toggleDarkMode}
                            size={18}
                            />
                    </div>
                </Container>
            </Navbar>
        </>    
    );
};


export default Header;