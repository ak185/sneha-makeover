import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authThunk";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {

    const [formData, setFormData] = useState({
       email: "",
       password: "" 
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { isAuthenticated } = useSelector((state) => state.auth);
    // console.log("isAuthenticated:",isAuthenticated);
    
    useEffect(() => {
        if(isAuthenticated){
            navigate("/dashboard");
        }
    },[isAuthenticated, navigate]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!formData.email){
            console.log("Enter Email");
            return;
        }
        if(!formData.password){
            console.log("Enter password");
            return;
        }

        const response = await dispatch(
            loginUser({
                email: formData.email,
                password: formData.password
            })
        );

        if(loginUser.fulfilled.match(response)) {
            alert("Login Successful");
        }

        if (loginUser.rejected.match(response)) {
            alert(response.payload?.message || "Login Failed");
        }
    }

    return(
        <Container>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" onChange={handleChange} placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={handleChange} autoComplete="off" placeholder="Password" />
                </Form.Group>
                

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    );
};

export default Login;