import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    const [isDarkMode, setDarkMode] = useState(false);
 
    const toggleDarkMode = (checked) => {
      setDarkMode(checked);
    };
    
    return (
        <>
            <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
                <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
                <main>
                    <Outlet />
                </main>
                <Footer/>
            </div>
        </>
    );
};

export default Layout;