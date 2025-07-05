import React from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
// import About from '../pages/About';
// import Services from '../pages/Services';
// import Contact from '../pages/Contact';
// import NotFonud from '../pages/NotFonud';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                {/* <Route path="/about" element={<About />} />
                <Route path="/blogs" element={<Blog />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFonud />} /> */}
            </Route>
        </Routes>
    );
};

export default AppRoutes;