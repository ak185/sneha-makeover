import React from "react";
import { Container, Nav, Navbar, Row, Col, ListGroup } from 'react-bootstrap';
import { CiLocationOn, CiMobile2, CiMail } from "react-icons/ci";
const Footer = () => {
    return(
        <>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <div className="text-start">
                            <h4>Quick Links</h4>
                        </div>
                        <div>
                            <Navbar expand="lg" className="">
                                <Nav defaultActiveKey="/home" className="flex-column text-start">
                                    <Nav.Link href="#home" className="px-0">Home</Nav.Link>
                                    <Nav.Link href="#about" className="px-0">About</Nav.Link>
                                    <Nav.Link href="#services" className="px-0">Services</Nav.Link>
                                    {/* <Nav.Link href="#contact">Contact Us</Nav.Link> */}
                                </Nav>
                            </Navbar>
                        </div>
                    </Col>
                    <Col>
                        <div className="text-center">
                            <h4 className="">Contact Info</h4>
                        </div>
                        <div>
                            <ListGroup>
                                <ListGroup.Item><CiLocationOn />Rath Hamirpur</ListGroup.Item>
                                <ListGroup.Item><CiMobile2 />Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item><CiMail />Morbi leo risus</ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col>
                        <div className="text-end">
                            <h4>Business Hours</h4>
                        </div>
                        <div>
                            <ListGroup>
                                <ListGroup.Item>Monday-Friday: 10Am - 6PM</ListGroup.Item>
                                <ListGroup.Item>Saturday: 10AM - 3PM</ListGroup.Item>
                                <ListGroup.Item>Sunday: Closed</ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="text-center">
                            @copyright sneha makover
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};


export default Footer;