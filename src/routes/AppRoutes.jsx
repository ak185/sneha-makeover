import React from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import { Home, About, Service, Contact, Register, Login, NotFound } from "../pages";

const AppRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
    );
};

export default AppRoutes;