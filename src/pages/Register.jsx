import React from "react";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { registerUser } from "../features/auth/authThunk";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        confirm_Password: ""
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(formData.phone !== "" && isNaN(formData.phone)){
            console.log("Not a Number");
            return;
        }

        if(formData.password !== formData.confirm_Password) {
            console.log("Password and confirmed password must be match!");
            return;            
        }

        const response = await dispatch(
            registerUser({
                first_name: formData.first_name,
                last_name: formData.last_name,
                email: formData.email,
                phone: formData.phone,
                password: formData.password
            })
        );

        if(registerUser.fulfilled.match(response)) {
            alert("Registration Successful");
        }

        if (registerUser.rejected.match(response)) {
            alert(response.payload?.message || "Registration Failed");
        }
    }

    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                <div className="my-2 py-2">
                    <h2>Registeration</h2>
                </div> 
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="first_name" onChange={handleChange} placeholder="Enter First Name" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="last_name" onChange={handleChange} placeholder="Enter Last Name" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" onChange={handleChange} placeholder="Enter Email" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" name="phone" onChange={handleChange} placeholder="Enter Phone" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" autoComplete='off' onChange={handleChange} placeholder="Password" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" name="confirm_Password" autoComplete='off' onChange={handleChange} placeholder="Confirm Password" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary" type="submit" size="md">
                            Register
                        </Button>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button variant="danger" type="button"  size="md">
                            Cancel
                        </Button>
                    </Col>
                </Row>                
            </Form>
        </Container>
    );
};

export default Register;