import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Dashboard = () => {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    console.log("user", user);
    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return(
        <>
            <h2>Welcome to the dashboard !{user.first_name} {user.last_name}</h2>
                <Button variant="primary" onClick={handleLogout}>
                    Logout
                </Button>
        </>
    );
};

export default Dashboard;